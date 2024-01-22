import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3002,
  },
  plugins: [
    vue(),
    Federation({
      name: 'products',
      filename: 'products.js',
      exposes: {
        './Products': './src/App.vue',
        './Store': './src/store.js'
      },
      shared: ['vue', 'vuex'],
      cors: true
    }),
  ],
  build: {
    target: "ES2022"
  }
})
