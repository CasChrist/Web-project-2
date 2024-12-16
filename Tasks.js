import storage from "./Storage.js";
import { addTaskToDOM } from "./scripts/addTaskToDOM.js";
import { TaskInputCreate } from "./scripts/TaskInputCreate.js";

export function updateNoTasksMessage() {
  const tasksContainer = document.querySelector(".tasks");
  const noTasksMessage = document.querySelector(".tasks-none");

  if (tasksContainer.children.length === 0) {
    noTasksMessage.style.display = "block";
  } else {
    noTasksMessage.style.display = "none";
  }
}

// initialize tasks creation
TaskInputCreate();

// load tasks from localStorage on page load
document.addEventListener("DOMContentLoaded", () => {
  const tasks = storage.getTasks();
  console.log(tasks);

  if (tasks.length > 0) {
    tasks.forEach((task) => {
      addTaskToDOM(task);
    });
  }

  updateNoTasksMessage();
});
