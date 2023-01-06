<template>
  <div class="virtual">
    <van-swipe
      ref="swipe"
      class="my-swipe"
      :loop="true"
      :autoplay="3000"
      :vertical="false"
      :landscape="landscape"
      indicator-color="white"
    >
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, type VNodeRef } from 'vue'
import { useAppStore } from '../../stores/app'

const appStore = useAppStore()
const landscape = computed(() => appStore.landscape)
const swipe = ref<VNodeRef>('')
watch(
  () => landscape.value,
  () => {
    swipe.value.resize()
  }
)
</script>

<style scoped lang="less">
.virtual {
  width: 100%;
  height: 300px;
  border: 2px solid #4caf50;
  margin: 0 auto;
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 300px;
    text-align: center;
    background-color: #39a9ed;
  }
}
</style>
