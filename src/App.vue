<script setup lang="ts">
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAppStore } from './stores'

const { locale: i18NLocale } = useI18n({ useScope: 'global' })
const appStore = useAppStore()

watch(
  () => appStore.locale,
  newLocale => {
    i18NLocale.value = newLocale
  }
)
</script>

<template>
  <AppRouterView />
</template>
