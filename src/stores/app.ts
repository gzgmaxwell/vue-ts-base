import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { ConfigProviderTheme } from '@jjlc/vant-plus'

export const useAppStore = defineStore('app', () => {
  const locale = ref('zhCN')
  const routeNameStack = ref<string[]>([])
  const landscape = ref(false)
  const theme = ref<ConfigProviderTheme>('light')

  const changeLocale = (newLocale: string) => {
    locale.value = newLocale
  }

  const changeLandscape = (state: boolean) => {
    landscape.value = state
  }

  const changeTheme = (themeParams: ConfigProviderTheme) => {
    theme.value = themeParams
    if (themeParams === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return {
    locale,
    routeNameStack,
    changeLocale,
    landscape,
    changeLandscape,
    theme,
    changeTheme
  }
})
