<script setup>
import { defineProps, toRefs, defineEmits, computed } from "vue";
const props = defineProps({ modelValue: String });
const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <label>Имя <input v-model="value" /></label>
</template>

<style scoped lang="less">
label {
  letter-spacing: 2.16px;
}

input {
  margin-left: 8px;
  width: 232px;
  height: 39px;
  border: 1px solid #acacac;
  background-color: #ffffff;
  padding: 0px 12px;
}
</style>
