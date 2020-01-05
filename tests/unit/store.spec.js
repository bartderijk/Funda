import Vue from 'vue';
import Vuex from 'vuex';
import Store from '../../src/store';

Vue.use(Vuex);

// @TODO Finish up these tests, ran out of time..

describe('Is able to get the data', () => {
  const mockKey = '1234';
  const mockData = { Adres: 'Sesamstraat 1' };
  const mockStore = {
    key: '',
    data: {},
  };

  test('Can set the apiKey', () => {
    Store.commit.setApiKey(mockKey);
    expect(mockStore.key).toEqual(mockKey);
  });

  test('Can get the data from the API', () => {
    Store.dispatch.getData();
    expect(mockStore.data).toEqual(mockData);
  });
});
