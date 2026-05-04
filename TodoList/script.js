document.addEventListener("DOMContentLoaded", () => {
  renderTasks();
});

const popup = document.getElementById("popup");
const abrir = document.getElementById("abrir");
const cerrar = document.getElementById("cerrar");
const form = document.querySelector(".form-task");

abrir.onclick = () => {
  popup.style.display = "block";
};

cerrar.onclick = () => {
  popup.style.display = "none";
};

// cerrar haciendo click fuera
window.onclick = (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameTask = document.getElementById("namenewtask").value;
  const severity = document.getElementById("importante").value;
  const username = document.getElementById("nameuser").value;

  const data = { nameTask, severity, username };

  const tareas = JSON.parse(localStorage.getItem("tasks")) || [];

  tareas.push(data);

  localStorage.setItem("tasks", JSON.stringify(tareas));

  form.reset();
  popup.style.display = "none";

  renderTasks();
});

function renderTasks() {
  const container = document.getElementById("tasksContainer");
  container.innerHTML = "";

  const tareas = JSON.parse(localStorage.getItem("tasks")) || [];
 
  tareas.forEach((task) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${task.nameTask}</h3>
      <p>Severity: ${task.severity}</p>
      <p>User: ${task.username}</p>
    `;

    container.appendChild(card);
  });
}
