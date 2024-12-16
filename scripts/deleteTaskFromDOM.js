import storage from "../Storage.js";
import { updateNoTasksMessage } from "../Tasks.js";

export function deleteTaskFromDOM(taskID) {
  const confirmationMenu = document.createElement("div");
  confirmationMenu.classList.add("confirmation-menu");

  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  overlay.onclick = () => closeConfirmationMenu(confirmationMenu, overlay);

  const content = document.createElement("div");
  content.classList.add("confirmation-menu__content");
  content.innerHTML = `
    <p>Delete this task?</p>
    <div class="confirmation-menu__content-buttons">
      <button id="confirmDelete">Yes</button>
      <button id="cancelDelete">No</button>
    </div>`;

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
