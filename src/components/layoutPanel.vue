<template>
  <div class="flex h-full w-full flex-col fixed">
    <div class="flex-shrink-0">
      <slot name="top"></slot>
    </div>

    <div class="h-full overflow-y-scroll">
      <slot></slot>
    </div>

    <div class="flex-shrink-0">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>
