<script setup lang="ts">
// @ts-ignore
import VirtualList from 'vue3-virtual-scroll-list'
import Item from './Items.vue'

const items = Array.from({ length: 10000 }, (v, i) => ({
  id: i,
  text: `vue3-virtual-scroll-list-examples ${i}`,
  desc: 'A vue3 component support big amount data list with high render performance and efficient.'
}))
</script>

<template>
  <VirtualList
    class="list-dynamic scroll-touch"
    :data-key="'id'"
    :data-sources="items"
    :data-component="Item"
    :estimate-size="80"
    :item-class="'list-item-dynamic'"
  />
</template>

<style lang="less">
.list-dynamic {
  width: 100%;
  height: 600px;
  border: 1px solid;
  overflow-y: auto;
  .list-item-dynamic {
    display: flex;
    align-items: center;
    padding: 1em;
    border-bottom: 1px solid;
  }
}
</style>
