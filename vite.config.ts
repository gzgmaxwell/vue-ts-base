import { fileURLToPath, URL } from 'node:url'
import { dirname, resolve } from 'node:path'
import { defineConfig, type PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { visualizer } from 'rollup-plugin-visualizer'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

import { VantPlusResolver } from '@jjlc/unplugin-vant-plus/resolvers'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import { viteMockServe } from 'vite-plugin-mock'
// @ts-ignore
import postCssPxToRem from 'postcss-pxtorem'
import legacy from '@vitejs/plugin-legacy'

const IS_PRODUCTION = process.env.NODE_ENV === 'production'

const plugins: PluginOption[] = [
  vue(),
  vueJsx(),
  Components({
    dirs: ['src/components'],
    resolvers: [VantPlusResolver()],
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
  VueSetupExtend(),
  VueI18nPlugin({
    include: resolve(dirname(fileURLToPath(import.meta.url)), 'src/i18n/*')
  }),
  viteMockServe({
    mockPath: 'mock',
    supportTs: true
  }),
  legacy({
    targets: ['defaults', 'ie >= 11', 'chrome 41'],
    additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    renderLegacyChunks: true,
    polyfills: [
      'es.symbol',
      'es.array.filter',
      'es.promise',
      'es.promise.finally',
      'es/map',
      'es/set',
      'es.array.for-each',
      'es.object.define-properties',
      'es.object.define-property',
      'es.object.get-own-property-descriptor',
      'es.object.get-own-property-descriptors',
      'es.object.keys',
      'es.object.to-string',
      'web.dom-collections.for-each',
      'esnext.global-this',
      'esnext.string.match-all'
    ]
  })
]

if (IS_PRODUCTION) {
  plugins.push(
    visualizer({
      open: true, // 在默认用户代理中打开生成的文件
      gzipSize: true, // 从源代码中收集 gzip 大小并将其显示在图表中
      brotliSize: true // 从源代码中收集 brotli 大小并将其显示在图表中
    }) as PluginOption
  )
}

export default defineConfig({
  plugins,
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 16, // 1rem的大小
          propList: ['*'] // 需要转换的属性，这里选择全部都进行转换
        }),
        tailwindcss,
        autoprefixer
      ]
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  logLevel: IS_PRODUCTION ? 'silent' : 'info',
  server: {
    host: '0.0.0.0'
  },
  build: {
    target: 'es6'
  }
})
