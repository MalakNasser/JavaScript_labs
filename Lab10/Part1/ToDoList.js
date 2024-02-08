var list = [];

function createButton(className, innerHTML, clickHandler) {
  var button = document.createElement("button");
  button.className = className;
  button.innerHTML = innerHTML;
  button.addEventListener("click", clickHandler);
  return button;
}

function createTaskElement(taskText, isChecked) {
  var newTask = document.createElement("div");
  newTask.className = "task";

  var taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;
  newTask.appendChild(taskSpan);

  var deleteButton = createButton("delete", '<i class="fas fa-trash"></i>', function() {
    deleteTask(newTask);
  });

  var checkButton = createButton("check", '<i class="fas fa-check"></i>', function() {
    checkTask(newTask);
  });

  var btnContainer = document.createElement("div");
  btnContainer.className = "btn-container";
  btnContainer.appendChild(deleteButton);
  btnContainer.appendChild(checkButton);
  newTask.appendChild(btnContainer);

  if (isChecked) {
    newTask.classList.add("checked");
  }

  return newTask;
}

function addTask() {
  var input = document.getElementsByTagName("input")[0];

  if (input.value === "") {
    alert("Please enter a task.");
    return;
  }

  var taskText = input.value;
  var taskChecked = false;

  var newTask = createTaskElement(taskText, taskChecked);

  var tasksContainer = document.getElementsByClassName("tasks")[0];
  tasksContainer.appendChild(newTask);

  list.push({ text: taskText, isChecked: taskChecked });
  saveListToLocalStorage();
}

function deleteTask(taskElement) {
  var tasksContainer = document.getElementsByClassName("tasks")[0];
  var taskIndex = Array.from(taskElement.parentNode.children).indexOf(
    taskElement
  );
  tasksContainer.removeChild(taskElement);
  list.splice(taskIndex, 1);
  saveListToLocalStorage();
}

function checkTask(taskElement) {
  taskElement.classList.toggle("checked");
  var taskIndex = Array.from(taskElement.parentNode.children).indexOf(
    taskElement
  );
  list[taskIndex].isChecked = !list[taskIndex].isChecked;
  saveListToLocalStorage();
}

function saveListToLocalStorage() {
  localStorage.setItem("todoList", JSON.stringify(list));
}

function loadListFromLocalStorage() {
  var storedList = localStorage.getItem("todoList");
  if (storedList) {
    list = JSON.parse(storedList);
    list.forEach((task) => {
      var newTask = createTaskElement(task.text, task.isChecked);

      var tasksContainer = document.getElementsByClassName("tasks")[0];
      tasksContainer.appendChild(newTask);
    });
  }
}

window.onload = function () {
  loadListFromLocalStorage();
};

var addBtn = document.getElementsByTagName("button")[0];
addBtn.addEventListener("click", addTask);
