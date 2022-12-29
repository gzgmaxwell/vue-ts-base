import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { ConfigProviderTheme } from 'vant'

export const useAppStore = defineStore('app', () => {
  const locale = ref('zhCN')
  const routeNameStack = ref<string[]>([])

  const changeLocale = (newLocale: string) => {
    locale.value = newLocale
  }

  return {
    locale,
    routeNameStack,
    changeLocale
  }
})

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
