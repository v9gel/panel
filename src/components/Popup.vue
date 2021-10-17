<script setup>
import { ref } from "vue";
import Button from "./ui/Button.vue";
import Stars from "./ui/Stars.vue";
const value = ref("Player");
</script>

<template>
  <div class="popup">
    <div class="status">Онлайн</div>
    <div class="name">
      <h1>Player 1</h1>
      <Stars class="stars" :count="5" large></Stars>
    </div>
    <Button class="button">ЗАКРЫТЬ</Button>
  </div>
</template>

<style scoped lang="less">
.popup {
  position: absolute;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 9px rgba(0, 0, 0, 0.21);
  background-color: #ffffff;
  padding: 18px;
  z-index: 1;
  width: fit-content;
}

.name {
  display: flex;
  margin-top: 17px;

  h1 {
    font-size: 48px;
    letter-spacing: 5.76px;
  }
}

.status {
  text-align: right;
}

.button {
  margin-top: 17px;
  margin-left: auto;
  margin-right: 0;
}

.stars {
  margin-left: 72px;
  margin-top: auto;
  margin-bottom: 0;
}
</style>
