<template>
  <layout-panel>
    <template #top><div class="bg-red-500 p-10"></div></template>
    <div class="bg-blue-500 p-5">
      <div
        v-for="i in 100"
        :key="i"
      >
        {{ i }}
      </div>
    </div>
    <template #bottom><div class="bg-yellow-500 p-20"></div></template>
  </layout-panel>
</template>
<<<<<<< HEAD
<route lang="yaml">
name: autoFlex
=======

<route lang="yaml">
name: AutoFlex
>>>>>>> ac675d38006f82d1095197f51fa0cca2bb7480ce
meta:
  requiresAuth: true
</route>
