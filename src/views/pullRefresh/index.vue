<template>
  <div class="pull">
    <van-pull-refresh
      v-model="loading"
      pulling-text="下拉可刷新...."
      :head-height="60"
      success-text="刷新成功"
      @refresh="onRefresh"
      @change="change"
    >
      <p>刷新次数: {{ count }}</p>
    </van-pull-refresh>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { showToast } from '@jjlc/vant-plus/es'

const loading = ref<boolean>(false)

const count = ref<number>(0)
const onRefresh = () => {
  setTimeout(() => {
    showToast('刷新成功')
    loading.value = false
    count.value += 1
  }, 1000)
}
const change = (e: any) => {
  if (e.distance > 300) {
    e.distance = 300
  }
}
</script>
<<<<<<< HEAD
=======

>>>>>>> ac675d38006f82d1095197f51fa0cca2bb7480ce
<style scoped lang="less">
.pull {
  padding: 50px;
  p {
    height: 200px;
  }
}
</style>
<<<<<<< HEAD
=======

<route lang="yaml">
name: PullRefresh
meta:
  requiresAuth: true
</route>
>>>>>>> ac675d38006f82d1095197f51fa0cca2bb7480ce
