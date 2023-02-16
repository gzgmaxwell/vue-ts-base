<template>
  <div class="transformIndex">
    <div class="bar"></div>
    <div class="box">
      <img
        height="500"
        width="300"
        class="rotate"
        src="@/assets/images/h-slider1.png"
      />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less">
.transformIndex {
  // overflow: hidden;
  .bar {
    height: 30px;
    background-color: #cd0000;
    position: fixed;
    left: 0;
    right: 0;
    top: 120px;
    /* Safari下z-index无效 */
    z-index: 99;
    transform: translateZ(130px);
  }
  .box {
    text-align: center;
    .rotate {
      transform: perspective(300px) rotateY(40deg);
    }
  }
}
</style>

<route lang="yaml">
name: TransformIndex
meta:
  requiresAuth: true
</route>
