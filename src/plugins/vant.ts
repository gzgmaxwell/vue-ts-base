import type { App } from 'vue'
import { Button, Dialog } from 'vant'
import 'vant/lib/index.css'

export default class VantPlugin {
  private app: App<Element>

  constructor(app: App<Element>) {
    this.app = app
  }

  public load() {
    this.app.use(Button)
    this.app.use(Dialog)
  }

  public mount() {
    this.app.mount('#app')
  }
}
