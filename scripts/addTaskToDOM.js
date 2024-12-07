import { deleteTaskFromDOM } from "./deleteTaskFromDOM.js";
import { showEdit } from "./showEdit.js";
import { showShare } from "./showShare.js";
import { showDetails } from "./showDetails.js";

export function addTaskToDOM(task) {
  const tasksContainer = document.querySelector(".tasks");
  const taskElement = document.createElement("div");
  const actionBar = document.createElement("div");

  taskElement.classList.add("tasks-elem");
  taskElement.setAttribute("data-id", task.id);
  taskElement.innerHTML = `
    <h3>${task.title}</h3>
    <p>${task.description}</p>
    <button class="tasks-elem__delete">x</button>`;

  actionBar.classList.add("tasks-elem__actions");
  actionBar.style.display = "none";
  actionBar.innerHTML = `
    <button class="tasks-elem__actions-edit"><img src="" alt="Edit"></button>
    <button class="tasks-elem__actions-share"><img src="" alt="Share"></button>
    <button class="tasks-elem__actions-details"><img src="" alt="Details"></button>`;

  taskElement.addEventListener("click", () => {
    const actionBar = taskElement.querySelector(".tasks-elem__actions");
    actionBar.style.display =
      actionBar.style.display === "none" ? "block" : "none";
  });

  taskElement
    .querySelector(".tasks-elem__delete")
    .addEventListener("click", (event) => {
      event.stopPropagation();
      deleteTaskFromDOM(task.id);
    });

  actionBar
    .querySelector(".tasks-elem__actions-edit")
    .addEventListener("click", (event) => {
      event.stopPropagation();
      showEdit(task.id);
    });

  actionBar
    .querySelector(".tasks-elem__actions-share")
    .addEventListener("click", (event) => {
      event.stopPropagation();
      showShare(task.id);
    });

  actionBar
    .querySelector(".tasks-elem__actions-details")
    .addEventListener("click", (event) => {
      event.stopPropagation();
      showDetails(task.id);
    });

  taskElement.appendChild(actionBar);
  tasksContainer.appendChild(taskElement);
}
