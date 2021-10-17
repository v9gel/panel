<script setup>
import Input from "./ui/Input.vue";
import Button from "./ui/Button.vue";
import Checkbox from "./ui/Checkbox.vue";
</script>

<template>
  <div class="header">
    <Input class="element" />
    <Checkbox class="element1" />
    <Button class="element2" />
  </div>
</template>

<style scoped lang="less">
.header {
  display: inline-flex;
  align-items: center;
}

// .element + .element {
//   margin-left: 15px;
// }

.element1 {
  margin-left: 15px;
}

.element2 {
  margin-left: 43px;
}
</style>
