import { defineStore } from 'pinia'
import type { ConfigProviderTheme } from 'vant'

export const useCommonStore = defineStore('common', {
  state: () => {
    return {
      landscape: false,
      theme: 'light'
    }
  },
  actions: {
    changeLandscape(state: boolean) {
      this.landscape = state
    },
    changeVantTheme(theme: ConfigProviderTheme) {
      this.theme = theme
    }
  }
})
