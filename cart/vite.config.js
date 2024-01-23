import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3001,
  },
  plugins: [
    vue(),
    Federation({
      name: 'cart',
      filename: 'cart.js',
      exposes: {
        './Cart': './src/App.vue',
        './CartStore': './src/store/cartStore.js'
      },
      shared: ['vue', 'pinia']
    }),
  ],
  build: {
    target: "ES2022"
  }
})
