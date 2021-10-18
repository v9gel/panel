<script setup>
import { ref } from "vue";
import Button from "./ui/Button.vue";
import Stars from "./ui/Stars.vue";
import emitter, { hidePopup } from "../emiter";
import store from "../store";
const player = ref({
  id: null,
  name: null,
  level: null,
  online: null,
});

const visiblePopup = ref(false);
emitter.on("show-popup", (event) => {
  visiblePopup.value = true;
  player.value = store.state.players.find((e) => e.id === event.id);
});

emitter.on("hide-popup", (e) => {
  visiblePopup.value = false;
});
</script>

<template>
  <!-- <div class="wrapper" v-if="visiblePopup" @click="hidePopup"> -->
  <div class="popup" v-if="visiblePopup">
    <div class="status">{{ player.online ? "Онлайн" : "Офлайн" }}</div>
    <div class="name">
      <h1>{{ player.name }}</h1>
      <Stars class="stars" :count="player.level" large></Stars>
    </div>
    <Button class="button" @click="hidePopup">ЗАКРЫТЬ</Button>
  </div>
  <!-- </div> -->
</template>

<style scoped lang="less">
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 2;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
}
.popup {
  top: 300px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  display: flex;
  z-index: 3;
  flex-direction: column;
  box-shadow: 0 10px 9px rgba(0, 0, 0, 0.21);
  background-color: #ffffff;
  padding: 18px;
  width: 500px;
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
  margin-left: auto;
  margin-right: 0;
  margin-top: auto;
  margin-bottom: 0;
}
</style>
