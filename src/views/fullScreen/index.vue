<template>
  <div class="fullscreen">
    <div
      v-safe-area:top
      class="p-5 bg-red-500"
    >
      <div class="bg-white p-5">content</div>
    </div>

    <div
      v-safe-area:bottom
      class="p-5 bg-blue-500"
    >
      <div class="fullscreen__bg-white p-5">content</div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.fullscreen {
  &__bg-white {
    background: #fff;
  }
}
</style>

<route lang="yaml">
<<<<<<< HEAD
name: fullScreen
=======
name: FullScreen
>>>>>>> ac675d38006f82d1095197f51fa0cca2bb7480ce
meta:
  requiresAuth: true
</route>
