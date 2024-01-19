function addTask() {
  var input = document.getElementsByTagName("input")[0];
  var newTask = document.createElement("div");
  newTask.className = "task";
  var container = document.getElementsByClassName("container")[0];
  newTask.innerHTML = `
    <span>${input.value}</span>
    <div class="btn-container">
    <button class="delete" onclick="deleteTask(this.parentNode.parentNode)">
      <i class="fas fa-trash"></i>
    </button>
    <button class="check" onclick="checkTask(this.parentNode.parentNode)">
      <i class="fas fa-check"></i>
    </button>
    </div>`;

  if (input.value === "") {
    alert("Please enter a task.");
    return;
  }
  container.appendChild(newTask);
}

function deleteTask(taskElement) {
  var container = document.getElementsByClassName("container")[0];
  container.removeChild(taskElement);
}

function checkTask(taskElement) {
  taskElement.classList.toggle("checked");
  if (taskElement.className.includes("checked")) {
    taskElement.style.backgroundColor = "#e0ffe0";
  } else {
    taskElement.style.backgroundColor = "";
  }
}
