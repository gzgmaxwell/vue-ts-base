<template>
  <div
    class="tab"
    :class="{ scrollY: landscape }"
  >
    <van-tabs
      ref="tabRef"
      scrollspy
      sticky
    >
      <van-tab
        v-for="index in 100"
        :key="index"
        :title="'标签 ' + index"
      >
        内容 {{ index }}
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, type VNodeRef } from 'vue'
import { useAppStore } from '../../stores/app'

const appStore = useAppStore()
const landscape = computed(() => appStore.landscape)
const tabRef = ref<VNodeRef>('')
</script>

<style scoped lang="less">
.tab {
  padding: 20px;
  height: 100%;
}
.scrollY {
  :deep(.van-tabs__wrap) {
    .van-tabs__nav--complete {
      overflow-y: auto !important;
    }
  }
}
</style>

<route lang="yaml">
name: TabScroll
meta:
  requiresAuth: true
</route>
