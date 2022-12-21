import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const routeNameStack = ref<string[]>([])

  return {
    routeNameStack
  }
})
