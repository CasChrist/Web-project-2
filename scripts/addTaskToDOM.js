import { deleteTaskFromDOM } from "./deleteTaskFromDOM.js";
import { showEdit } from "./showEdit.js";
import { showShare } from "./showShare.js";
import { showDetails } from "./showDetails.js";

export function addTaskToDOM(task) {
  const tasksContainer = document.querySelector(".tasks");
  const taskElement = document.createElement("div");
  const actionBar = document.createElement("div");

  taskElement.classList.add("outline", "tasks-elem");
  taskElement.setAttribute("data-id", task.id);
  taskElement.innerHTML = `
    <div class="tasks-elem-text">
      <h3>${task.title}</h3>
      <p>${task.description}</p>
    </div>
    <button class="tasks-elem__delete outline">X</button>`;

  actionBar.classList.add("tasks-elem__actions");
  actionBar.innerHTML = `
    <button class="tasks-elem__actions-share"><img src="./icons/share.svg" alt="Share"></button>  
    <button class="tasks-elem__actions-details">i</button>
    <button class="tasks-elem__actions-edit"><img src="./icons/edit.svg" alt="Edit"></button>`;

  taskElement.addEventListener("click", () => {
    if (taskElement.nextElementSibling && taskElement.nextElementSibling.classList.contains("tasks-elem__actions")) {
        actionBar.remove();
    } else {
      taskElement.after(actionBar);
    }
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

  // taskElement.appendChild(actionBar);
  tasksContainer.appendChild(taskElement);
}
