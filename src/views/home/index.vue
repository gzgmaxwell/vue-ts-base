<script setup lang="ts" name="HomeView">
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useAppStore } from '@/stores'

const router = useRouter()
const { t } = useI18n({ useScope: 'global' })
const appStore = useAppStore()

const navigateToNewPage = () => router.push('/counter')
const changeLocale = () => {
  const NEW_LOCALE = appStore.locale === 'zhCN' ? 'enUS' : 'zhCN'
  appStore.changeLocale(NEW_LOCALE)
}
</script>

<template>
  <div class="home-view">
    <van-button
      class="home-view__button"
      type="primary"
      block
      @click="navigateToNewPage"
    >
      {{ t('Navigate To New Page') }}
    </van-button>
    <van-button
      class="home-view__button"
      type="primary"
      block
      @click="changeLocale"
    >
      {{ t('Change Language') }}
    </van-button>
  </div>
</template>

<style lang="less">
.home-view {
  padding: 10px;
  &__button {
    margin-bottom: 10px;
  }
}
</style>
