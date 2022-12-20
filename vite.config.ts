import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Components({
      dirs: ['src/components'],
      resolvers: [ElementPlusResolver()],
      extensions: ['vue'],
      dts: 'src/components.d.ts'
    }),
    Pages({
      dirs: [
        { dir: 'src/views', baseRoute: '' },
        { dir: 'src/views/home', baseRoute: '/' }
      ],
      importMode: 'async',
      exclude: ['**/components/**']
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
