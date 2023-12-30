import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from "node:path";
import dts from "vite-plugin-dts";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts()],
  build: {
    cssCodeSplit: false,
    lib: {
      entry: resolve(__dirname, 'src/components/index.ts'),
      name: '@chatsum/discord',
      fileName: 'discord'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
