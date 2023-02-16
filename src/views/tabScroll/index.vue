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
<<<<<<< HEAD
=======

>>>>>>> ac675d38006f82d1095197f51fa0cca2bb7480ce
<style scoped lang="less">
.tab {
  padding: 20px;
  height: 100%;
}
.scrollY {
<<<<<<< HEAD
  /deep/.van-tabs__wrap {
=======
  :deep(.van-tabs__wrap) {
>>>>>>> ac675d38006f82d1095197f51fa0cca2bb7480ce
    .van-tabs__nav--complete {
      overflow-y: auto !important;
    }
  }
}
</style>
<<<<<<< HEAD
=======

<route lang="yaml">
name: TabScroll
meta:
  requiresAuth: true
</route>
>>>>>>> ac675d38006f82d1095197f51fa0cca2bb7480ce
