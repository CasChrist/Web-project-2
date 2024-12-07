export function showShare(taskID) {
  const taskElement = document.querySelector(
    `.tasks-elem[data-id='${taskID}']`
  );

  if (taskElement) {
    const shareMenu = document.createElement("div");
    shareMenu.classList.add("tasks-elem__share");

    const overlay = document.createElement("div");
    overlay.classList.add("tasks-elem__overlay");
    overlay.addEventListener("click", () => {
      document.body.removeChild(shareMenu);
    });

    const content = document.createElement("div");
    content.classList.add("tasks-elem__share-content");
    content.innerHTML = `
      <button class="tasks-elem__share-icons"><img src="" alt="Copy to clipboard"></button>
      <button class="tasks-elem__share-icons"><img src="" alt="VK"></button>
      <button class="tasks-elem__share-icons"><img src="" alt="Telegram"></button>
      <button class="tasks-elem__share-icons"><img src="" alt="WhatsApp"></button>
      <button class="tasks-elem__share-icons"><img src="" alt="Facebook"></button>`;

    shareMenu.appendChild(overlay);
    shareMenu.appendChild(content);

    document.body.appendChild(shareMenu);
  }
}
