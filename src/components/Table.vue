<script setup>
import { defineProps, toRefs, ref, computed } from "vue";
import Stars from "./ui/Stars.vue";
import Status from "./ui/Status.vue";
import ContextMenu from "./ContextMenu.vue";
import emitter from "../emiter";
import HeadSorter from "./HeadSorter.vue";
import { nextSort, SORT } from "../common/sort";
const props = defineProps({ players: [] });
const { players } = toRefs(props);
const sortedColumn = ref("");
const sortType = ref(SORT.NONE);

const contextMenuVisible = ref(false);
const point = ref({ x: 0, y: 0 });
const selectedPlayerId = ref("");
const showContextMenu = (e, id) => {
  contextMenuVisible.value = true;
  selectedPlayerId.value = id;
  point.value = { x: e.clientX - 120, y: e.target.offsetTop, target: e.target };
};

emitter.on("hide-context-menu", () => (contextMenuVisible.value = false));

emitter.on("change-sort", (event) => {
  sortType.value = nextSort(event.currentSort);
  sortedColumn.value = event.sortedColumn;
});

const sortedPlayers = (type, col) => {
  const tempPlayers = [...players.value];

  if (type === SORT.NONE) {
    return tempPlayers.reverse();
  }

  const splayers = tempPlayers.sort((a, b) => {
    if (a[col] < b[col]) {
      return col === 1;
    }
    if (a[col] > b[col]) {
      return -1;
    }

    return 0;
  });

  if (type === SORT.MIN_MAX) {
    return splayers;
  }

  return splayers.reverse();
};
</script>

<template>
  <div>
    <table cellpadding="4" cellspacing="4">
      <thead>
        <tr class="head">
          <th><HeadSorter column="id"> ID </HeadSorter></th>
          <th><HeadSorter column="name"> Имя </HeadSorter></th>
          <th><HeadSorter column="level"> Уровень </HeadSorter></th>
          <th><HeadSorter column="online"> Онлайн </HeadSorter></th>
        </tr>
      </thead>
      <tbody v-if="players.length > 0">
        <tr
          v-for="(player, index) in sortedPlayers(
            sortType,
            sortedColumn
          ).reverse()"
          :key="index"
          class="data"
          @mousedown.right="showContextMenu($event, player.id)"
        >
          <td class="id">{{ player.id }}</td>
          <td>{{ player.name }}</td>
          <td><Stars :count="player.level" /></td>
          <td><Status :online="player.online"></Status></td>
        </tr>
        <ContextMenu
          v-if="contextMenuVisible"
          :position="point"
          :playerId="selectedPlayerId"
        ></ContextMenu>
      </tbody>
      <tbody v-if="players.length === 0" class="not-found">
        Игроки не найдены
      </tbody>
    </table>
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
    grid-auto-rows: min-content;
  }

  tbody {
    position: relative;
    margin-top: 20px;
    height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .not-found {
    display: flex;
    align-items: center;
    justify-content: center;
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
