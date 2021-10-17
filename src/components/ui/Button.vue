<script setup>
import { ref } from "vue";
const value = ref("Player");
</script>

<template>
  <button><slot></slot></button>
</template>

<style scoped lang="less">
button {
  width: 184px;
  height: 44px;
  border: 1px solid #959595;
  background-color: #e2e2e2;
  text-align: center;
}
</style>
