import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import pxtovw from 'postcss-px-to-viewport'
import { visualizer } from 'rollup-plugin-visualizer'

import {
  ElementPlusResolver,
  VantResolver
} from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

const loderPxtovw = pxtovw({
  unitToConvert: 'px', // 要转化的单位
  viewportWidth: 750, // UI设计稿的宽度
  unitPrecision: 6, // 转换后的精度，即小数点位数
  propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
  viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
  fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
  selectorBlackList: ['wrap'], // 指定不转换为视窗单位的类名，
  minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
  mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
  replace: true, // 是否转换后直接更换属性值
  exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
  landscape: false // 是否处理横屏情况
})

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Components({
      dirs: ['src/components'],
      resolvers: [ElementPlusResolver(), VantResolver()],
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
    }),
    visualizer({
      open: true, // 在默认用户代理中打开生成的文件
      gzipSize: true, // 从源代码中收集 gzip 大小并将其显示在图表中
      brotliSize: true // 从源代码中收集 brotli 大小并将其显示在图表中
    }),
    VueSetupExtend()
  ],
  css: {
    postcss: {
      plugins: [loderPxtovw]
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
