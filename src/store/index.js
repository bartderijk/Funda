import Vue from 'vue';
import Vuex from 'vuex';
import get from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: true,
    hasError: false,
    key: '',
    objectId: 'f88c78e9-fba7-446a-a23c-a37b26fc904b',
    data: {},
  },
  getters: {
    hasMissingApiKey: state => (state.key === ''),
    hasData: state => Object.values(state.data).length > 0,
  },
  mutations: {
    setData(state, data) {
      state.data = data;
      state.isLoading = false;
    },
    handleError(state, error) {
      state.hasError = true;
      state.errorMsg = error;
      state.isLoading = false;
    },
    setApiKey(state, keyVal) {
      // The exact format of the key is unknown, so we'll only check for the basics
      if (keyVal && keyVal !== '') {
        state.key = keyVal;
      }
    },
  },
  actions: {
    getData({ state, getters }) {
      // We're not making the call if the key is missing
      if (getters.hasMissingApiKey) {
        state.isLoading = false;
        return;
      }

      // reset error state
      state.hasError = false;

      // Use a proxy to circumvent the inability of getting data locally
      // https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe/43881141#43881141
      const proxyurl = 'https://cors-anywhere.herokuapp.com/';

      // build the query
      const url = `http://partnerapi.funda.nl/feeds/Aanbod.svc/json/detail/${state.key}/koop/${state.objectId}/`;

      // lets get the data
      get(proxyurl + url)
        .then(response => this.commit('setData', response.data)) // use setData to save the result to the store
        .catch(error => this.commit('handleError', error)); // deal with errors using handleError
    },
  },
});
