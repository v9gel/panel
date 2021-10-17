<script setup>
import { defineProps, toRefs } from "vue";
const props = defineProps({ count: Number, large: Boolean });
const { count, large } = toRefs(props);
</script>

<template>
  <div>
    <img
      v-for="index in count"
      :key="index"
      class="star"
      :src="large ? 'images/star_30.png' : 'images/star_22.png'"
    />
  </div>
</template>

<style scoped lang="less">
.star {
  width: fit-content;
  height: fit-content;
}
.star + .star {
  margin-left: 4px;
}
</style>
