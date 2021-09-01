const TASK_LIST = [
  { id: '1', name: 'Hacer la cama', completed: true },
  { id: '2', name: 'Hacer ejercicio', completed: true },
  { id: '3', name: 'Desayunar', completed: false }
];

document.body.onload = init;

function init() {
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", addTask);
  loadTasksInDOM();
}

function loadTasksInDOM() {
  const listBody = document.getElementById("list-body");

  TASK_LIST.forEach(task => {
    const tr = document.createElement('tr');
    tr.className = 'list-row';
    const tdId = document.createElement('td');
    const tdName = document.createElement('td');
    const tdCompleted = document.createElement('td');

    tdId.innerText = task.id;
    tdId.className = 'list-head-item';
    tdName.innerText = task.name;
    tdName.className = 'list-head-item';
    tdCompleted.innerText = task.completed ? "completada" : "sin completar";
    tdCompleted.className = 'list-head-item';

    tr.appendChild(tdId);
    tr.appendChild(tdName);
    tr.appendChild(tdCompleted);

    listBody.appendChild(tr)
  });
}

function addTask(event) {
  event.preventDefault();
  const newId = document.getElementById("new-task-id");
  const newName = document.getElementById("new-task-name");
  let isCreated = false;
  TASK_LIST.forEach( task => {
    if (task.id === newId.value) {
      isCreated = true;
    }
  });
  if (isCreated) {
    alert("Id repetido.");
    return null;
  }
  const newTask = {
    id: newId.value,
    name: newName.value,
    completed: false
  };
  TASK_LIST.push(newTask);
  removeDOMTasks();
  loadTasksInDOM();
}

function deleteTask(event) {}
function completeTask(event) {}

function removeDOMTasks() {
  const listBody = document.getElementById("list-body");

  while (listBody.lastChild) {
    listBody.removeChild(listBody.lastChild);
  }
}
