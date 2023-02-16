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
<<<<<<< HEAD
      @click="() => router.push('/vantLang')"
=======
      @click="() => router.push({ name: 'VantLang' })"
>>>>>>> ac675d38006f82d1095197f51fa0cca2bb7480ce
    >
      vant 语言切换
    </van-button>
    <van-button
      class="home-view__button"
      type="primary"
      block
<<<<<<< HEAD
      @click="() => router.push('/mock')"
=======
      @click="() => router.push({ name: 'Mock' })"
>>>>>>> ac675d38006f82d1095197f51fa0cca2bb7480ce
    >
      mock 数据
    </van-button>
    <van-button
      class="home-view__button"
      type="primary"
      block
<<<<<<< HEAD
      @click="() => router.push('/vantTheme')"
=======
      @click="() => router.push({ name: 'VantTheme' })"
>>>>>>> ac675d38006f82d1095197f51fa0cca2bb7480ce
    >
      vant 黑暗模式
    </van-button>
    <van-button
      class="home-view__button"
      type="primary"
      block
<<<<<<< HEAD
      @click="() => router.push('/autoFlex')"
=======
      @click="() => router.push({ name: 'AutoFlex' })"
>>>>>>> ac675d38006f82d1095197f51fa0cca2bb7480ce
    >
      高度自适应
    </van-button>
    <van-button
      class="home-view__button"
      type="primary"
      block
<<<<<<< HEAD
      @click="() => router.push('/fullScreen')"
=======
      @click="() => router.push({ name: 'FullScreen' })"
>>>>>>> ac675d38006f82d1095197f51fa0cca2bb7480ce
    >
      刘海屏
    </van-button>
    <van-button
      class="home-view__button"
      type="primary"
      block
<<<<<<< HEAD
      @click="() => router.push('/virtualList')"
=======
      @click="() => router.push({ name: 'VirtualList' })"
>>>>>>> ac675d38006f82d1095197f51fa0cca2bb7480ce
    >
      虚拟列表
    </van-button>
    <van-button
      class="home-view__button"
      type="primary"
      block
<<<<<<< HEAD
      @click="() => router.push('/swiper')"
=======
      @click="() => router.push({ name: 'Swiper' })"
>>>>>>> ac675d38006f82d1095197f51fa0cca2bb7480ce
    >
      vant 轮播
    </van-button>
    <van-button
      class="home-view__button"
      type="primary"
      block
<<<<<<< HEAD
      @click="() => router.push('/tab')"
=======
      @click="() => router.push({ name: 'SwiperHorizontal' })"
    >
      vant horizontal 轮播
    </van-button>
    <van-button
      class="home-view__button"
      type="primary"
      block
      @click="() => router.push({ name: 'Tab' })"
>>>>>>> ac675d38006f82d1095197f51fa0cca2bb7480ce
    >
      tab 标签
    </van-button>
    <van-button
      class="home-view__button"
      type="primary"
      block
<<<<<<< HEAD
      @click="() => router.push('/list')"
=======
      @click="() => router.push({ name: 'TabScroll' })"
    >
      tabscroll 标签
    </van-button>
    <van-button
      class="home-view__button"
      type="primary"
      block
      @click="() => router.push({ name: 'List' })"
>>>>>>> ac675d38006f82d1095197f51fa0cca2bb7480ce
    >
      list 列表
    </van-button>
    <van-button
      class="home-view__button"
      type="primary"
      block
<<<<<<< HEAD
      @click="() => router.push('/pullRefresh')"
    >
      pullRefresh 下拉刷新
    </van-button>
=======
      @click="() => router.push({ name: 'PullRefresh' })"
    >
      pullRefresh 下拉刷新
    </van-button>
    <van-button
      class="home-view__button"
      type="primary"
      block
      @click="() => router.push({ name: 'VanPopup' })"
    >
      vanPopup
    </van-button>
    <van-button
      class="home-view__button"
      type="primary"
      block
      @click="() => router.push({ name: 'TransformIndex' })"
    >
      transformIndex
    </van-button>
>>>>>>> ac675d38006f82d1095197f51fa0cca2bb7480ce
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
<<<<<<< HEAD
name: home
=======
name: Home
>>>>>>> ac675d38006f82d1095197f51fa0cca2bb7480ce
meta:
  requiresAuth: true
</route>
