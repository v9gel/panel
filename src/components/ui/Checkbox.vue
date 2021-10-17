<script setup>
import { ref } from "vue";
const value = ref(true);
</script>

<template>
  <div class="checkbox">
    <label>Онлайн</label>
    <input type="checkbox" v-model="value" />
  </div>
</template>

<style scoped lang="less">
.checkbox {
  display: inline-flex;
  align-items: center;
}

input {
  margin-left: 13px;
  width: 25px;
  height: 25px;
}
</style>
