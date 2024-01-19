import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    vue(),
    Federation({
      name: 'ShoppingApp',
      remotes: {
        'products': 'http://localhost:3002/dist/assets/products.js',
        'cart': 'http://localhost:3001/dist/assets/cart.js'
      },
      shared: ['vue']
    }),
  ],
  build: {
    target: "ES2022"
  }
})
