let taskInput = document.getElementById("task");
let taskList = document.getElementById("taskList");

document.getElementById("addTask").addEventListener("click", addTask);
document.getElementById("clearTasks").addEventListener("click", clearTasks);

function addTask() {
    let taskText = taskInput.value;
    if (taskText === "") return;

    let li = document.createElement("li");
    li.textContent = taskText;

    let delete_button = document.createElement("button");
    delete_button.textContent = "X";
    delete_button.classList.add("delete_btn");

    delete_button.addEventListener("click", function (e) {
        li.remove();
    });

    li.addEventListener("click", function () {
        if (li.style.textDecoration === "line-through") {
            li.style.textDecoration = "";
        } else {
            li.style.textDecoration = "line-through";
        }
    });

    li.appendChild(delete_button);
    taskList.appendChild(li);

    taskInput.value = "";
}

function clearTasks() {
    taskList.innerHTML = "";
}