<template>
  <div>
    <van-row justify="center">
      <van-col span="7">
        <van-button
          size="mini"
          type="primary"
          @click="fetchData"
          >mock 数据</van-button
        >
      </van-col>
    </van-row>

    <div
      v-for="(item, index) in users"
      :key="index"
      class="mockBox"
    >
      {{ index + 1 }}-{{ item }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const users = ref([])

const fetchData = () => {
  axios.get('/api/user').then(res => {
    users.value = res.data.data
  })
}
</script>

<style scoped>
.mockBox {
  text-align: center;
  line-height: 40px;
}
</style>
<route lang="yaml">
name: mock
meta:
  requiresAuth: true
</route>
