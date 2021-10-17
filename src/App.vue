<template>
  <div class="app">
    <Header />
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
</script>

<style lang="less">
* {
  font-family: Roboto, sans-serif;
  letter-spacing: 2.16px;
  font-size: 18px;
  font-weight: 400;
  box-sizing: border-box;
  color: #000000;
}

.app {
  margin-top: 52px;
  margin-left: 120px;
}
</style>
