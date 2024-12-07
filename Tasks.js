export function updateNoTasksMessage() {
  const tasksContainer = document.querySelector(".tasks");
  const noTasksMessage = document.querySelector(".tasks-none");

  if (tasksContainer.children.length === 0) {
    noTasksMessage.style.display = "block";
  } else {
    noTasksMessage.style.display = "none";
  }
}