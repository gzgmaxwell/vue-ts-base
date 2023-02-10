<template>
  <div class="bg-white dark:bg-slate-800 min-h-screen">
    <van-config-provider
      :theme-vars="themeVars"
      :theme="(theme as ConfigProviderTheme)"
    >
      <div
        class="bg-white dark:bg-slate-800 px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <h3
          class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight"
        >
          tailwind theme demo
        </h3>
        <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
          The Zero Gravity Pen can be used to write in any orientation,
          including upside-down. It even works in outer space.
        </p>
      </div>
      <van-form>
        <van-field
          name="checked"
          label="暗黑模式"
        >
          <template #input>
            <van-switch
              :model-value="checked"
              @update:model-value="onUpdateValue"
            />
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
      </van-form>
    </van-config-provider>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type {
  ConfigProviderTheme,
  ConfigProviderThemeVars
} from '@jjlc/vant-plus'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app'

const storeCommon = useAppStore()

const checked = ref(false)
const { theme } = storeToRefs(storeCommon)
const onUpdateValue = (newValue: boolean) => {
  checked.value = newValue
  const value: ConfigProviderTheme = newValue ? 'dark' : 'light'
  storeCommon.changeVantTheme(value)
  if (value === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

const rate = ref(4)
const slider = ref(50)

// themeVars 内的值会被转换成对应 CSS 变量
// 比如 sliderBarHeight 会转换成 `--van-slider-bar-height`
const themeVars: ConfigProviderThemeVars = {
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
<route lang="yaml">
name: vantTheme
meta:
  requiresAuth: true
</route>
