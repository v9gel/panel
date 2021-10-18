import mitt from "mitt";
const emitter = mitt();

export const hideContextMenu = () => {
  emitter.emit("hide-context-menu");
};

export const showPopup = (id) => {
  emitter.emit("show-popup", { id });
};

export const hidePopup = () => {
  emitter.emit("hide-popup");
};

export default emitter;
