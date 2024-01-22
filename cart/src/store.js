import { createStore } from 'vuex';

const store = createStore({
  state: {
    cartItems: [{
      id: 1,
      name: 'Iphone12'
    },],
  },
  mutations: {
    addToCart(state, product) {
      state.cartItems.push(product);
    },
  },
  actions: {
  },
});

export default store;
