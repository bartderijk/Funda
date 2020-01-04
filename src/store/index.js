import Vue from 'vue';
import Vuex from 'vuex';
import get from 'axios';
import apiKey from '../../config';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    key: apiKey,
    objectId: 'f88c78e9-fba7-446a-a23c-a37b26fc904b',
    data: {},
  },
  getters: {
    hasMissingApiKey: state => (!state.key),
    hasData: state => Object.values(state.data).length > 0,
  },
  mutations: {
    setData(state, data) {
      state.data = data;
    },
  },
  actions: {
    getData({ state, getters }) {
      // We're not making the call if the key is missing
      if (getters.hasMissingApiKey) {
        return;
      }

      // Use a proxy to circumvent the inability of getting data locally
      // https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe/43881141#43881141
      const proxyurl = 'https://cors-anywhere.herokuapp.com/';

      // build the query
      const url = `http://partnerapi.funda.nl/feeds/Aanbod.svc/json/detail/${state.key}/koop/${state.objectId}/`;

      // lets get the data
      get(proxyurl + url)
        // use setData to save the result to the store
        .then(response => this.commit('setData', response.data));
      // @TODO error handling
    },
  },
});
