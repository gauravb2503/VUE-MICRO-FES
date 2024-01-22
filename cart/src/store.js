import { createStore } from 'vuex';

const store = createStore({
  state: {
    cartItems: [1],
  },
  mutations: {
    addToCart(state, item) {
      state.cartItems.push(item);
    },
    // other mutations as needed
  },
  actions: {
    // actions as needed
  },
});

export default store;
