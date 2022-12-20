import { createApp } from 'vue'
import App from './App.vue'
import VuePlugin from './plugins/vue'
import VantPlugin from './plugins/vant'

import './styles/main.css'

const app = createApp(App)
const vuePlugin = new VuePlugin(app)

vuePlugin.load()
vuePlugin.mount()

const vantPlugin = new VantPlugin(app)
vantPlugin.load()
vantPlugin.mount()
