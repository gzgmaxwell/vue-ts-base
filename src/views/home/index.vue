<script setup lang="ts" name="HomeView">
import { useRouter } from 'vue-router'
import { useAppStore } from '@/stores'

const router = useRouter()
const appStore = useAppStore()

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
      @click="() => router.push('/counter')"
    >
      {{ $t('Navigate To New Page') }}
    </van-button>
    <van-button
      class="home-view__button"
      type="primary"
      block
      @click="changeLocale"
    >
      {{ $t('Change Language') }}
    </van-button>
    <van-button
      class="home-view__button"
      type="primary"
      block
      @click="() => router.push('/sfcI18N')"
    >
      SFC I18N {{ $t('Test') }}
    </van-button>
    <van-button
      class="home-view__button"
      type="primary"
      block
      @click="() => router.push('/mock')"
    >
      {{ $t('Navigate To New Mock') }}
    </van-button>
    <van-button
      class="home-view__button"
      type="primary"
      block
      @click="() => router.push('/vantlang')"
    >
      {{ $t('Vant lang') }}
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
