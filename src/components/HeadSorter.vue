<script setup>
import Arrow from "./ui/Arrow.vue";
import emitter, { changeSort } from "../emiter";
import { defineProps, toRefs, ref } from "@vue/runtime-core";
import { nextSort, SORT } from "../common/sort";

const props = defineProps({ column: String });
const { column } = toRefs(props);
const currentSort = ref(SORT.NONE);

emitter.on("change-sort", (event) => {
  if (event.sortedColumn === column.value) {
    currentSort.value = nextSort(event.currentSort);
    return;
  }

  currentSort.value = SORT.NONE;
});
</script>

<template>
  <div>
    <div class="title" @click="changeSort(column, currentSort)">
      <slot></slot> <Arrow :sort="currentSort" />
    </div>
  </div>
</template>

<style scoped lang="less">
.title {
  display: flex;
  cursor: pointer;
}
</style>
