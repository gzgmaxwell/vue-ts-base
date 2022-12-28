<template>
  <div class="flex h-full w-full flex-col fixed">
    <div class="flex-shrink-0">
      <!-- top 部分 -->
      <slot name="top"></slot>
    </div>

    <div class="h-full overflow-y-scroll">
      <!-- cotent 部分 -->
      <slot></slot>
    </div>

    <div class="flex-shrink-0">
      <!-- bottom 部分 -->
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
/*
  自适应容器面板组件

  1，top，bottom部分的高度为自身高度；
  2，content部分自动占用剩余高度，超过该高度的内容会自动滚动；
  3，整个组件的高度取决与父元素的高度；
*/
</script>
