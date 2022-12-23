<script setup lang="ts" name="DatePicker">
import { ref } from 'vue'

const currentDate = ref(['2021', '01', '01'])
</script>

<template>
  <van-date-picker
    v-model="currentDate"
    title="选择日期"
  />
</template>

<style lang="less"></style>
