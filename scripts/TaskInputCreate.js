import storage from "../Storage.js";
import { addTaskToDOM } from "./addTaskToDOM.js";
import { updateNoTasksMessage } from "../Tasks.js";

export function TaskInputCreate() {
  const titleInput = document.getElementById("titleInput");
  const descriptionInput = document.getElementById("descriptionInput");
  const addButton = document.getElementById("addButton");

  addButton.addEventListener("click", () => {
    const newTask = {
      id: Date.now(),
      title: titleInput.value,
      description: descriptionInput.value,
    };

    if (newTask.title && newTask.description) {
      storage.addTask(newTask);
      addTaskToDOM(newTask);
      updateNoTasksMessage();
      console.log(storage.getTasks());
      titleInput.value = "";
      descriptionInput.value = "";
    } else {
      alert("Please fill out all fields.");
    }
  });
}
