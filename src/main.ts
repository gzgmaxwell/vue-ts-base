import { createApp } from 'vue'
import App from './App.vue'
import VuePlugin from './plugins/vue'
import './plugins/vant'

import './styles/main.css'
import I18NPlugin from './plugins/i18n'

const app = createApp(App)
const vuePlugin = new VuePlugin(app)
const i18NPlugin = new I18NPlugin(app)

vuePlugin.load()
i18NPlugin.load()
vuePlugin.mount()
