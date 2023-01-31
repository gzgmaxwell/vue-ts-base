<template>
  <div class="list">
    <div class="list">sum:{{ list.length }}</div>
    <van-pull-refresh
      v-model="refreshing"
      :landscape="landscape"
      @refresh="onRefresh"
    >
      <van-list
        ref="listRef"
        v-model:loading="loading"
        :finished="finished"
        finished-text="确实没有更多了"
        :landscape="landscape"
        @load="onLoad"
      >
        <van-cell
          v-for="item in list"
          :key="item"
          :title="item"
        />
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted, watchEffect, computed, type VNodeRef } from 'vue'
import { useAppStore } from '../../stores/app'

const appStore = useAppStore()
const landscape = computed(() => appStore.landscape)

const listRef = ref<VNodeRef>('')

const list = ref<number[]>([])
const loading = ref(false)
const finished = ref(false)
const refreshing = ref(false)

const onLoad = () => {
  setTimeout(() => {
    if (refreshing.value) {
      list.value = []
      refreshing.value = false
    }

    for (let i = 0; i < 10; i += 1) {
      list.value.push(list.value.length + 1)
    }
    loading.value = false

    if (list.value.length >= 100) {
      finished.value = true
    }
  }, 1000)
}

const onRefresh = () => {
  // 清空列表数据
  finished.value = false

  // 重新加载数据
  // 将 loading 设置为 true，表示处于加载状态
  loading.value = true
  onLoad()
}
onUnmounted(() => {
  document.documentElement.style.height = ''
  document.documentElement.style.overflow = ''
})

watchEffect(() => {
  if (landscape.value) {
    document.documentElement.style.height = '100%'
    document.documentElement.style.overflow = 'auto'
  } else {
    document.documentElement.style.height = ''
    document.documentElement.style.overflow = ''
  }
})
</script>
<style scoped lang="less">
.list {
  padding: 20px;
}
</style>
