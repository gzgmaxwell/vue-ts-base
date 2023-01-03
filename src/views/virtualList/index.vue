<template>
  <div class="list-container">
    <VirtualList :data="dataSource">
      <template #default="{ item, index }">
        <div class="item-container">
          <div class="cell cell-index">{{ index + 1 }}</div>
          <div class="cell">{{ item.name }}</div>
          <div class="cell">{{ item.email }}</div>
        </div>
      </template>
    </VirtualList>
  </div>
</template>

<script lang="ts" setup>
import { VirtualList } from 'vue3-virtual-list'

const dataSource = Array.from({ length: 10000 }, (v, i) => ({
  index: i,
  name: i,
  email: i
}))
</script>

<style>
.list-container {
  width: 100%;
  height: 600px;
  border: 2px solid #4caf50;
  margin: 0 auto;
}
.item-container {
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.cell {
  margin: 0 8px;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  white-space: nowrap;
}
.cell.cell-index {
  flex: none;
  min-width: 100px;
}
</style>
