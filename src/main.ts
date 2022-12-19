import { createApp } from 'vue'
import App from './App.vue'
import VuePlugin from './plugins/vue'

import './styles/main.css'

const app = createApp(App)
const vuePlugin = new VuePlugin(app)

vuePlugin.load()
vuePlugin.mount()
