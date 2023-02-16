<template>
  <div class="popBox">
    <van-row
      gutter="20"
      justify="center"
    >
      <van-col
        span="6"
        @click="clickPop('top')"
        >顶部弹出</van-col
      >
      <van-col
        span="6"
        @click="clickPop('bottom')"
        >底部弹出</van-col
      >
      <van-col
        span="6"
        @click="clickPop('left')"
        >左侧弹出</van-col
      >
      <van-col
        span="6"
        @click="clickPop('right')"
        >右侧弹出</van-col
      >
    </van-row>
    <van-row
      gutter="20"
      :style="{ marginTop: '20px' }"
      justify="center"
    >
      <van-col
        span="12"
        @click="clickPop('show')"
        >展示弹出层</van-col
      >
      <van-col
        span="12"
        @click="clickPop('center')"
        >居中</van-col
      >
    </van-row>
    <!-- 顶部弹出 -->
    <van-popup
      v-model:show="showTop"
      position="top"
      :style="{ height: '30%' }"
    />

    <!-- 底部弹出 -->
    <van-popup
      v-model:show="showBottom"
      position="bottom"
      :style="{ height: '30%' }"
    />

    <!-- 左侧弹出 -->
    <van-popup
      v-model:show="showLeft"
      position="left"
      :style="{ width: '30%', height: '100%' }"
    />

    <!-- 右侧弹出 -->
    <van-popup
      v-model:show="showRight"
      position="right"
      :style="{ width: '30%', height: '100%' }"
    />
    <van-popup
      v-model:show="show"
      :style="{ padding: '64px' }"
      >内容</van-popup
    >
    <van-popup
      v-model:show="showCenter"
      round
      :style="{ padding: '64px' }"
    >
      内容
    </van-popup>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const showTop = ref(false)
const showBottom = ref(false)
const showLeft = ref(false)
const showRight = ref(false)
const show = ref(false)
const showCenter = ref(false)
const clickPop = (type: string) => {
  if (type === 'top') {
    showTop.value = true
  }
  if (type === 'bottom') {
    showBottom.value = true
  }
  if (type === 'left') {
    showLeft.value = true
  }
  if (type === 'right') {
    showRight.value = true
  }
  if (type === 'show') {
    show.value = true
  }
  if (type === 'center') {
    showCenter.value = true
  }
}
</script>

<style lang="less">
.popBox {
  padding: 60px 20px;
}
</style>

<route lang="yaml">
name: VanPopup
meta:
  requiresAuth: true
</route>
