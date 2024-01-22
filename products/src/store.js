import { createStore } from 'vuex';

const store = createStore({
  state: {
    productList: [
      {
        id: 1,
        name: 'Iphone12'
      },
      {
        id: 2,
        name: 'Iphone15'
      }
    ]
  },
  mutations: {
  },
  actions: {
    
  },
});

export default store;
