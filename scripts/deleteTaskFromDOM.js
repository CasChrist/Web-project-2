import storage from "../Storage.js";
import { updateNoTasksMessage } from "../Tasks.js";

export function deleteTaskFromDOM(taskID) {
  const confirmationMenu = document.createElement("div");
  confirmationMenu.classList.add("tasks-elem__confirmation-menu");

  const overlay = document.createElement("div");
  overlay.classList.add("tasks-elem__overlay");
  overlay.onclick = () => closeConfirmationMenu(confirmationMenu, overlay);

  const content = document.createElement("div");
  content.classList.add("task-elem__confirmation-menu-content");
  content.innerHTML = `
    <p>Delete this task?/p>
    <button id="confirmDelete">Yes</button>
    <button id="cancelDelete">No</button>`;

  confirmationMenu.appendChild(content);
  document.body.appendChild(overlay);
  document.body.appendChild(confirmationMenu);

  document.getElementById("confirmDelete").onclick = () => {
    const taskElement = document.querySelector(
      `.tasks-elem[data-id='${taskID}']`
    );

    if (taskElement) {
      taskElement.remove();
      storage.deleteTask(taskID);
      updateNoTasksMessage();
      console.log(storage.getTasks());
    }
    closeConfirmationMenu(confirmationMenu, overlay);
  };

  document.getElementById("cancelDelete").onclick = () => {
    closeConfirmationMenu(confirmationMenu, overlay);
  };
}

function closeConfirmationMenu(confirmationMenu, overlay) {
  document.body.removeChild(confirmationMenu);
  document.body.removeChild(overlay)
}
