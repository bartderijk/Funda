import Vue from 'vue';
import Vuex from 'vuex';
import get from 'axios';
import apiKey from '../../config';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    objectId: 'f88c78e9-fba7-446a-a23c-a37b26fc904b',
    data: {},
  },
  mutations: {
    setData(state, data) {
      state.data = data;
    },
  },
  actions: {
    getData({ state }) {
      // using a proxy to circumvent the inability of getting data locally
      // https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe/43881141#43881141
      const proxyurl = 'https://cors-anywhere.herokuapp.com/';
      const url = `http://partnerapi.funda.nl/feeds/Aanbod.svc/json/detail/${apiKey}/koop/${state.objectId}/`;

      get(proxyurl + url)
        .then(response => this.commit('setData', response.data));
    },
  },
});
