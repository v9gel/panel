import { createStore } from "vuex";

export default createStore({
  state: {
    players: [
      { id: 0, name: "Martin", level: 5, online: false },
      { id: 1, name: "Lynda", level: 2, online: false },
      { id: 2, name: "Robyn", level: 0, online: false },
      { id: 3, name: "Marianne", level: 1, online: true },
      { id: 4, name: "Veronica", level: 0, online: false },
      { id: 5, name: "Spencer", level: 0, online: true },
      { id: 6, name: "Billy", level: 5, online: false },
      { id: 7, name: "Rita", level: 5, online: false },
      { id: 8, name: "Byron", level: 0, online: false },
      { id: 9, name: "Kyle", level: 0, online: true },
      { id: 10, name: "Viola", level: 1, online: true },
      { id: 11, name: "Leslie", level: 1, online: true },
      { id: 12, name: "Arlene", level: 0, online: false },
      { id: 13, name: "Adam", level: 0, online: false },
      { id: 14, name: "Dawn", level: 5, online: true },
      { id: 15, name: "Latoya", level: 0, online: true },
      { id: 16, name: "Chelsea", level: 0, online: false },
      { id: 17, name: "Laverne", level: 4, online: true },
      { id: 18, name: "Billy", level: 3, online: false },
      { id: 19, name: "Derrick", level: 3, online: false },
      { id: 20, name: "Anne", level: 2, online: true },
      { id: 21, name: "Virgil", level: 1, online: false },
      { id: 22, name: "Frederick", level: 0, online: false },
      { id: 23, name: "Eunice", level: 0, online: false },
      { id: 24, name: "Leslie", level: 5, online: true },
      { id: 25, name: "Jeannie", level: 5, online: false },
      { id: 26, name: "Winston", level: 0, online: false },
      { id: 27, name: "Billy", level: 0, online: false },
      { id: 28, name: "Joyce", level: 0, online: true },
      {
        id: 29,
        name: "Wolfeschlegelsteinhausenbergerdorff",
        level: 2,
        online: true,
      },
      { id: 30, name: "Derrick", level: 0, online: false },
      { id: 31, name: "Glen", level: 0, online: true },
      { id: 32, name: "Sylvester", level: 0, online: true },
      { id: 33, name: "Isaac", level: 2, online: false },
      { id: 34, name: "Frederick", level: 1, online: false },
      { id: 35, name: "Alexandra", level: 0, online: false },
      { id: 36, name: "Jonathan", level: 5, online: true },
      { id: 37, name: "Leslie", level: 0, online: false },
      { id: 38, name: "Kathryn", level: 2, online: true },
      { id: 39, name: "Frederick", level: 0, online: false },
      { id: 40, name: "Kathryn", level: 1, online: false },
    ],
    onlyOnline: false,
    searchText: "",
  },
  mutations: {
    toggleOnlyOnline(state) {
      state.onlyOnline = !state.onlyOnline;
    },
    changeSearchText(state, payload) {
      state.searchText = payload;
    },
    visibleAll(state) {
      state.onlyOnline = false;
      state.searchText = "";

      state.players = state.players.map((e) => {
        e.hidden = undefined;
        return e;
      });
    },
    hidePlayer(state, { id }) {
      state.players.find((e) => e.id === id).hidden = true;
    },
  },
  getters: {
    visiblePlayers: (state) => {
      let filtredOnline;

      if (state.onlyOnline) {
        filtredOnline = state.players.filter(
          (e) => e.online === state.onlyOnline
        );
      } else {
        filtredOnline = state.players;
      }

      let filtredText;
      if (state.searchText !== "") {
        filtredText = filtredOnline.filter((e) =>
          e.name.toLowerCase().includes(state.searchText.toLowerCase())
        );
      } else {
        filtredText = filtredOnline;
      }

      return filtredText.filter((e) => e.hidden === undefined);
    },
  },
  actions: {},
  modules: {},
});
