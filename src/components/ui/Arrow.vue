<script setup>
import { defineProps, toRefs } from "vue";
const props = defineProps({ sort: String });
const { sort } = toRefs(props);
</script>

<template>
  <div :class="[sort]" />
</template>

<style scoped lang="less">
div {
  margin-left: 5px;
  width: 16px;
  height: 20px;
}
.none {
  background-image: url(../../assets/arrow-black-black.png);
}

.min-max,
.max-min {
  background-image: url(../../assets/arrow-white-black.png);
}

.max-min {
  transform: rotate(180deg);
}
</style>
