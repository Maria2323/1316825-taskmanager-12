import AbstractView from "./abstract.js";

const createBoardTasksTemplate = () => {
  return (
    `<div class="board__tasks"></div>`
  );
};

export default class BoardTasks extends AbstractView {
  getTemplate() {
    return createBoardTasksTemplate();
  }
}
