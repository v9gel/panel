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
      <thead>
        <tr class="head">
          <th>ID</th>
          <th>Имя</th>
          <th>Уровень</th>
          <th>Онлайн</th>
        </tr>
      </thead>
      <tbody>
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
      </tbody>
    </table>
    <!-- <ContextMenu :point="point"></ContextMenu> -->
  </div>
</template>

<style scoped lang="less">
*::-webkit-scrollbar {
  width: 8px;
}

*::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
  background-color: #b9b9b9;
}

*::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: #464646;
}

*::-webkit-scrollbar-thumb:hover {
  background: #555;
}

table {
  background-color: #e2e2e2;
  border: 5px solid #e2e2e2;
  width: 100%;

  thead,
  tbody {
    display: grid;
  }

  tbody {
    margin-top: 20px;
    height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
  }

  thead tr {
    background-color: #c6c6c6;
    height: 46px;
    text-align: left;
    padding-right: 8px;
  }

  tbody tr + tr {
    margin-top: 4px;
  }

  tbody tr {
    background-color: #d3d3d3;
    height: 42px;
  }

  tr {
    display: grid;
    align-items: center;
    padding-left: 8px;
    grid-template-columns: 1fr 3fr 1fr 1fr;
  }

  .id {
    text-align: right;
    padding-right: calc(100% - 20px);
  }
}
</style>
