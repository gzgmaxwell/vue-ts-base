<template>
  <div class="virtual">
    <van-swipe
      class="my-swipe"
      :loop="true"
      :vertical="true"
      indicator-color="white"
    >
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
  </div>
</template>

<style scoped lang="less">
.virtual {
  width: 100%;
  height: 100%;
  border: 2px solid #4caf50;
  margin: 0 auto;
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 300px;
    text-align: center;
    background-color: #39a9ed;
  }
}
</style>
