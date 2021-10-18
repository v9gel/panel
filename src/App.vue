<script setup>
import { computed, ref } from "@vue/reactivity";
import Header from "./components/Header.vue";
import Table from "./components/Table.vue";
import store from "./store";
import emitter, { hideContextMenu } from "./emiter";
import Popup from "./components/Popup.vue";

const visiblePlayers = computed({
  get() {
    return store.getters.visiblePlayers;
  },
});
</script>

<template>
  <div class="app" @click="hideContextMenu">
    <Header />
    <Table :players="visiblePlayers" class="table" />
    <Popup />
  </div>
</template>

<style lang="less">
.app {
  margin-top: 52px;
  margin-left: 120px;
  margin-right: 120px;
  margin-bottom: 52px;
  user-select: none;
  min-width: 960px;
  position: relative;
}

.table {
  margin-top: 25px;
}
</style>
