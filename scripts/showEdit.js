import storage from "../Storage.js";

export function showEdit(taskID) {
  const taskElement = document.querySelector(
    `.tasks-elem[data-id='${taskID}']`
  );

  if (taskElement) {
    const title = taskElement.querySelector("h3").innerText;
    const description = taskElement.querySelector("p").innerText;

    const modal = document.createElement("div");
    modal.classList.add("modal");

    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    overlay.onclick = () => {
      closeModal(modal, overlay);
    };

    const modalContent = document.createElement("div");
    modalContent.classList.add("modal__content");
    modalContent.innerHTML = `
      <input id="editTitleInput" value="${title}" />
      <textarea id="editDescriptionInput">${description}</textarea>
      <div id="modalButtons">
        <button id="saveButton">Save</button>
        <button id="closeModal">Cancel</button
      </div>`;

    modalContent.querySelector("#saveButton").onclick = () => {
      const updatedTask = {
        id: taskID,
        title: modalContent.querySelector("#editTitleInput").value,
        description: modalContent.querySelector("#editDescriptionInput").value,
      };
      storage.updateTask(taskID, updatedTask);
      taskElement.querySelector("h3").textContent = updatedTask.title;
      taskElement.querySelector("p").textContent = updatedTask.description;
      console.log(storage.getTasks());
      closeModal(modal, overlay);
    };

    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    document.body.appendChild(overlay);

    document.getElementById("closeModal").onclick = () => {
      closeModal(modal, overlay);
    };
  }
}

function closeModal(modal, overlay) {
  document.body.removeChild(modal);
  document.body.removeChild(overlay);
}
