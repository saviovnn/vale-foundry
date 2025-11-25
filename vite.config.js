import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/ValeFoundryLP/', // Substitua 'ValeFoundryLP' pelo nome do seu repositório
})
