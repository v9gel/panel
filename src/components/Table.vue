<script setup>
import { defineProps, toRefs, ref } from "vue";
import Stars from "./ui/Stars.vue";
import Status from "./ui/Status.vue";
import ContextMenu from "./ContextMenu.vue";
const props = defineProps({ players: [] });
const { players } = toRefs(props);

const point = ref({ x: 0, y: 0 });

const showContextMenu = (e) => {
  if (e.button === 2) {
    point.value = { x: e.clientX, y: e.clientY };
    console.log(e);
  }
};
</script>

<template>
  <div>
    <table cellpadding="4" cellspacing="4">
      <tr class="head">
        <th>ID</th>
        <th>Имя</th>
        <th>Уровень</th>
        <th>Онлайн</th>
      </tr>
      <tr
        v-for="(player, index) in players"
        :key="index"
        class="data"
        @mousedown="showContextMenu"
      >
        <td class="id">{{ player.id }}</td>
        <td>{{ player.name }}</td>
        <td><Stars :count="player.level" /></td>
        <td><Status :online="player.online"></Status></td>
      </tr>
    </table>
    <!-- <ContextMenu :point="point"></ContextMenu> -->
  </div>
</template>

<style scoped lang="less">
* {
  box-sizing: content-box;
}

table {
  background-color: #e2e2e2;
  border: 5px solid #e2e2e2;
  width: 100%;

  td,
  th {
    // display: flex;
    vertical-align: middle;
  }
  .head {
    background-color: #c6c6c6;
    border-bottom: 15px solid #e2e2e2;
    height: 46px;
    text-align: left;
  }

  .data {
    background-color: #d3d3d3;
    border-top: 2px solid #e2e2e2;
    height: 42px;
  }

  //   .data .id {
  //     text-align: right;
  //     width: 150px;
  //   }
}
</style>
