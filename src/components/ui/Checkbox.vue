<script setup>
import { defineProps, toRefs, defineEmits, computed } from "vue";
const props = defineProps({ modelValue: Boolean });
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
