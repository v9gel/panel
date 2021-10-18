<script setup>
import { defineProps, toRefs } from "vue";
const props = defineProps({ online: Boolean });
const { online } = toRefs(props);
</script>

<template>
  <div :class="{ circle: true, online }"></div>
</template>

<style scoped lang="less">
.circle {
  width: 21px;
  height: 21px;
  background-color: #989898;
  border-radius: 50%;
}

.online {
  background-color: #58900c;
}
</style>
