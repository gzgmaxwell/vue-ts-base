<template>
  <van-config-provider theme="light">
    <van-form>
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

<script></script>

<style lang="less" scoped></style>
