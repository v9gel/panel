<script setup>
import { ref, defineProps, toRefs } from "vue";
import { showPopup } from "../emiter";
import store from "../store";
const props = defineProps({ position: Object, playerId: String });
const { position, playerId } = toRefs(props);

const hidePlayer = (id) => {
  store.commit("hidePlayer", { id });
};
</script>

<template>
  <ul
    class="context-menu"
    v-bind:style="{ top: position.y + 'px', left: position.x + 'px' }"
  >
    <li class="element-menu" @click="showPopup(playerId)">
      <div class="text">Показать профиль</div>
    </li>
    <li class="element-menu" @click="hidePlayer(playerId)">
      <div class="text">Скрыть игрока</div>
    </li>
  </ul>
</template>

<style scoped lang="less">
.element-menu {
  display: flex;

  width: fit-content;
  //   text-align: center;
  padding: 22px;
  justify-content: center;

  .text {
  }
}

.element-menu + .element-menu {
  border-top: 4px solid #d8d8d8;
  box-sizing: content-box;
}

.context-menu {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  box-shadow: 0 10px 16px 1px rgba(0, 0, 0, 0.21);
  border-radius: 10px;
  background-color: #e2e2e2;
  z-index: 5;
}
</style>
