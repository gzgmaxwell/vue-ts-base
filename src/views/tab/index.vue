<template>
  <div
    class="tab"
    :class="{ scrollY: landscape }"
  >
    <van-tabs
      ref="tabRef"
      v-model:active="active"
      type="card"
      :before-change="beforeChange"
      @click-tab="onClickTab"
    >
      <van-tab
        v-for="index in 10"
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
import { showToast } from '@jjlc/vant-plus/es'
import { useAppStore } from '../../stores/app'

const appStore = useAppStore()
const landscape = computed(() => appStore.landscape)
const tabRef = ref<VNodeRef>('')
const active = ref(0)
const onClickTab = (e: any) => showToast(e.title)
const beforeChange = (index: number) => {
  // 返回 false 表示阻止此次切换
  if (index === 1) {
    return true
  }
  return true
}
</script>
<style scoped lang="less">
.tab {
  padding: 20px;
}
.scrollY {
  /deep/.van-tabs__wrap {
    .van-tabs__nav--complete {
      overflow-y: auto !important;
    }
  }
}
</style>
