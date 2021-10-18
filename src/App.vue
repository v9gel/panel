<script setup>
import { computed } from "@vue/reactivity";
import Header from "./components/Header.vue";
import Table from "./components/Table.vue";
import store from "./store";

const visiblePlayers = computed({
  get() {
    return store.getters.visiblePlayers;
  },
});
</script>

<template>
  <div class="app">
    <Header />
    <Table :players="visiblePlayers" class="table"></Table>
  </div>
</template>

<style lang="less">
.app {
  margin-top: 52px;
  margin-left: 120px;
  margin-right: 120px;
  margin-bottom: 52px;
  user-select: none;
}

.table {
  margin-top: 25px;
}
</style>
