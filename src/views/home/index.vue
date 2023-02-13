<script setup lang="ts" name="HomeView">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="home-view">
    <van-button
      class="home-view__button"
      type="primary"
      block
      @click="() => router.push({ name: 'VantLang' })"
    >
      vant 语言切换
    </van-button>
    <van-button
      class="home-view__button"
      type="primary"
      block
      @click="() => router.push({ name: 'Mock' })"
    >
      mock 数据
    </van-button>
    <van-button
      class="home-view__button"
      type="primary"
      block
      @click="() => router.push({ name: 'VantTheme' })"
    >
      vant 黑暗模式
    </van-button>
    <van-button
      class="home-view__button"
      type="primary"
      block
      @click="() => router.push({ name: 'AutoFlex' })"
    >
      高度自适应
    </van-button>
    <van-button
      class="home-view__button"
      type="primary"
      block
      @click="() => router.push({ name: 'FullScreen' })"
    >
      刘海屏
    </van-button>
    <van-button
      class="home-view__button"
      type="primary"
      block
      @click="() => router.push({ name: 'VirtualList' })"
    >
      虚拟列表
    </van-button>
    <van-button
      class="home-view__button"
      type="primary"
      block
      @click="() => router.push({ name: 'Swiper' })"
    >
      vant 轮播
    </van-button>
    <van-button
      class="home-view__button"
      type="primary"
      block
      @click="() => router.push({ name: 'SwiperHorizontal' })"
    >
      vant horizontal 轮播
    </van-button>
    <van-button
      class="home-view__button"
      type="primary"
      block
      @click="() => router.push({ name: 'Tab' })"
    >
      tab 标签
    </van-button>
    <van-button
      class="home-view__button"
      type="primary"
      block
      @click="() => router.push({ name: 'TabScroll' })"
    >
      tabscroll 标签
    </van-button>
    <van-button
      class="home-view__button"
      type="primary"
      block
      @click="() => router.push({ name: 'List' })"
    >
      list 列表
    </van-button>
    <van-button
      class="home-view__button"
      type="primary"
      block
      @click="() => router.push({ name: 'PullRefresh' })"
    >
      pullRefresh 下拉刷新
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

<route lang="yaml">
name: Home
meta:
  requiresAuth: true
</route>
