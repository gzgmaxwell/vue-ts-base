<template>
  <van-config-provider :theme-vars="themeVars">
    <van-form>
      <van-field
        name="checked"
        label="评分"
      >
        <template #input>
          <van-switch v-model="checked" />
        </template>
      </van-field>
      <van-field
        name="rate"
        label="评分"
      >
        <template #input>
          <van-rate v-model="rate" />
        </template>
      </van-field>
      <van-field
        name="slider"
        label="滑块"
      >
        <template #input>
          <van-slider v-model="slider" />
        </template>
      </van-field>
      <div style="margin: 16px">
        <van-button
          round
          block
          type="primary"
          native-type="submit"
        >
          提交
        </van-button>
      </div>
    </van-form>
  </van-config-provider>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked = ref(true)
console.log(checked)

const rate = ref(4)
const slider = ref(50)

// themeVars 内的值会被转换成对应 CSS 变量
// 比如 sliderBarHeight 会转换成 `--van-slider-bar-height`
const themeVars = {
  rateIconFullColor: '#07c160',
  sliderBarHeight: '4px',
  sliderButtonWidth: '20px',
  sliderButtonHeight: '20px',
  sliderActiveBackground: '#07c160',
  buttonPrimaryBackground: '#07c160',
  buttonPrimaryBorderColor: '#07c160'
}
</script>

<style lang="less" scoped></style>
