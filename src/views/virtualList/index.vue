<template>
  <div>
    <div class="list-container">
      <VueVirtualList :data="dataSource">
        <template #default="{ item, index }">
          <div class="item-container">
            <div class="cell cell-index">{{ index + 1 }}</div>
            <div class="cell">{{ item.name }}</div>
            <div class="cell">{{ item.email }}</div>
            <div class="cell">{{ item.address }}</div>
          </div>
        </template>
      </VueVirtualList>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VueVirtualList from './vue3-virtual-list.vue'

export default defineComponent({
  name: 'App',
  components: {
    VueVirtualList
  },
  data() {
    return {
      dataCount: 10000,
      dataSource: Array.from({ length: 1000 }, (v, i) => ({
        id: i + 1,
        name: i,
        email: i,
        address: i,
        img: i
      }))
    }
  }
})
</script>

<style lang="less">
.list-container {
  width: 100%;
  height: 300px;
  border: 2px solid #4caf50;
  margin: 30px auto;
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
  &.cell-index {
    flex: none;
    min-width: 60px;
  }
}
</style>

<route lang="yaml">
name: virtualList
meta:
  requiresAuth: true
</route>
