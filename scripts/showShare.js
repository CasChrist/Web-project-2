export function showShare(taskID) {
  const taskElement = document.querySelector(
    `.tasks-elem[data-id='${taskID}']`
  );

  if (taskElement) {
    const shareMenu = document.createElement("div");
    shareMenu.classList.add("share");

    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    overlay.onclick = () => {
      document.body.removeChild(shareMenu);
      document.body.removeChild(overlay);
    };

    const shareMenuContent = document.createElement("div");
    shareMenuContent.classList.add("share__content");
    shareMenuContent.innerHTML = `
      <button class="share__icons"><img src="./icons/copy.svg" alt="Copy to clipboard"></button>
      <button class="share__icons"><img src="./icons/vk.svg" alt="VK"></button>
      <button class="share__icons"><img src="./icons/telegram.svg" alt="Telegram"></button>
      <button class="share__icons"><img src="./icons/whatsapp.svg" alt="WhatsApp"></button>
      <button class="share__icons"><img src="./icons/facebook.svg" alt="Facebook"></button>`;

    shareMenu.appendChild(shareMenuContent);
    document.body.appendChild(shareMenu);
    document.body.appendChild(overlay);
  }
}
