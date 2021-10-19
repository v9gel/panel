<script setup>
import Input from "./ui/Input.vue";
import Button from "./ui/Button.vue";
import Checkbox from "./ui/Checkbox.vue";
import { defineProps, toRefs, ref, computed } from "vue";
import store from "../store";

const searchText = computed({
  get() {
    return store.state.searchText;
  },
  set(value) {
    store.commit("changeSearchText", value);
  },
});

const onlyOnline = computed({
  get() {
    return store.state.onlyOnline;
  },
  set() {
    store.commit("toggleOnlyOnline");
  },
});

const visibleAll = () => {
  store.commit("visibleAll");
};
</script>

<template>
  <div class="header">
    <Input class="element" v-model="searchText" />
    <Checkbox class="element" v-model="onlyOnline" />
    <Button class="element" @click="visibleAll">Показать всех</Button>
  </div>
</template>

<style scoped lang="less">
.header {
  display: inline-flex;
  align-items: center;
}

.element + .element {
  margin-left: 50px;
}
</style>
