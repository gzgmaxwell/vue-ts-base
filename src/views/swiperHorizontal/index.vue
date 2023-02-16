<template>
  <div class="virtual">
    <van-swipe
      ref="swipe"
      class="my-swipe"
      :loop="true"
      :autoplay="3000"
      :width="375"
      :vertical="false"
      indicator-color="white"
      touchable
      @change="onChange"
    >
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
      <template #indicator="{ active, total }">
        <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
      </template>
    </van-swipe>
  </div>
</template>
<script setup lang="ts">
import { ref, type VNodeRef } from 'vue'
/**
 *  @case :vertical="false" :width="375"
 *  @case :vertical="true" 去掉 :width="375"
 */
const swipe = ref<VNodeRef>('')
const onChange = (index: number) => {
  console.log(index)
}
</script>
<style scoped lang="less">
.virtual {
  width: 100%;
  height: 100%;
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

<route lang="yaml">
name: SwiperHorizontal
meta:
  requiresAuth: true
</route>
