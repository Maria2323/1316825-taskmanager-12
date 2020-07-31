import {createMainMenuTemplate} from "./view/site-menu.js";
import {createFilterTemplate} from "./view/filter.js";
import {createBoardTemplate} from "./view/board.js";
import {createTaskAddTemplate} from "./view/taskAdd.js";
import {createTaskTemplate} from "./view/task.js";
import {createTaskEditTemplate} from "./view/taskEdit.js";
import {createButtonTemplate} from "./view/button.js";

const TASK_COUNT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createMainMenuTemplate(), `beforeend`);
render(siteMainElement, createFilterTemplate(), `beforeend`);
render(siteMainElement, createBoardTemplate(), `beforeend`);

const siteCardElement = siteMainElement.querySelector(`.board__tasks`);

render(siteCardElement, createTaskAddTemplate(), `beforeend`);

for (let i = 0; i < TASK_COUNT; i++) {
  render(siteCardElement, createTaskTemplate(), `beforeend`);
}

render(siteCardElement, createTaskEditTemplate(), `beforeend`);

const siteBoardElement = siteMainElement.querySelector(`.board`);
render(siteBoardElement, createButtonTemplate(), `beforeend`);
