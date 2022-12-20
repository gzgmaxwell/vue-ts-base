<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>postcss-px-to-viewport</h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
  text-align: center;
}

h3 {
  width: 750px;
  height: 100px;
  color: aquamarine;
  background: rgb(229, 228, 228);
  font-size: 24px;
  box-shadow: 10px 5px 5px black;
}
</style>
