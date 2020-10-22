const tasks = [];

const ulTasks = document.querySelector(".tasks");

// Agregamos el HTML que nos interesa
const renderTask = () => {
    for (let task of tasks) {
        ulTasks.innerHTML += '<li class="individual-task">'+ task +'</li>';
    }
};

const button = document.querySelector(".input-button");

button.onclick = () => {
    let textInput = document.querySelector(".text-input");
    ulTasks.innerHTML += '<li class="individual-task">'+ textInput.value +'</li>';
    textInput.value = "";
};

renderTask();