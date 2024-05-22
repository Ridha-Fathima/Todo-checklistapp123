const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const button = document.getElementById("add");

let todos = [];

button.addEventListener("click", function() {
    if (inputBox.value === '') {
        alert("Add task to the input box");
    } else {
        const todo = inputBox.value;
        todos.push(todo);
        addItem(todo);
        inputBox.value = '';
        saveList();
    }
});



function addItem(todo) {
    let listElement = document.createElement("li");
    listElement.textContent = todo;
    listContainer.appendChild(listElement);
    let spanElement = document.createElement("span");
    spanElement.textContent = "\u00d7";
    listElement.appendChild(spanElement);
    
    spanElement.addEventListener("click", function() {
        listContainer.removeChild(listElement);
        remove(todo);
    });

}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
       saveList();
    }
    });

function remove(todo){
    let index = todos.indexOf(todo);
    if (index !== -1) {
        todos.splice(index, 1);
      saveList();
        console.log(todos);
    }
}

function saveList() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showList() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showList();
