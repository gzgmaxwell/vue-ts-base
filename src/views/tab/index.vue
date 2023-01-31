<template>
  <div
    class="tab"
    :class="{ scrollY: landscape }"
  >
    <van-tabs
      v-if="isShow"
      ref="tabRef"
      v-model:active="active"
      :landscape="landscape"
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
import { computed, ref, watch, type VNodeRef } from 'vue'
import { useAppStore } from '../../stores/app'

const appStore = useAppStore()
const landscape = computed(() => appStore.landscape)
const tabRef = ref<VNodeRef>('')
const active = ref(0)
const isShow = ref(true)

watch(
  () => landscape.value,
  () => {
    // tabRef.value.resize()
    // isShow.value = false
    // setTimeout(() => {
    //   isShow.value = true
    // }, 200)
  }
)
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
