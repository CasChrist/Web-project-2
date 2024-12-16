export function showDetails(taskID) {
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
    overlay.onclick = () => closeModal(modal, overlay);

    const modalContent = document.createElement("div");
    modalContent.classList.add("modal__content");
    modalContent.innerHTML = `
      <input id="viewTitleInput" value="${title}" readonly />
      <textarea id="viewDescriptionInput" readonly>${description}</textarea>
      <button id="closeModal">Close</button>`;

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
