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

<<<<<<< HEAD
  const changeVantTheme = (themeParams: ConfigProviderTheme) => {
    theme.value = themeParams
=======
  const changeTheme = (themeParams: ConfigProviderTheme) => {
    theme.value = themeParams
    if (themeParams === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
>>>>>>> ac675d38006f82d1095197f51fa0cca2bb7480ce
  }

  return {
    locale,
    routeNameStack,
    changeLocale,
    landscape,
    changeLandscape,
    theme,
<<<<<<< HEAD
    changeVantTheme
=======
    changeTheme
>>>>>>> ac675d38006f82d1095197f51fa0cca2bb7480ce
  }
})
