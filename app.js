
var MyArr = [];

function createTodo(event) {
    event.preventDefault();

    var todoInput = document.getElementById("todo");
    var todo = todoInput.value;

    MyArr.unshift(todo);
    todoInput.value = "";

    renderTodos();
}

function removeTodo(index) {
    MyArr.splice(index, 1);
    renderTodos();
}

function renderTodos() {
    var result = document.getElementById("result");
    result.innerHTML = "";

    for (let i = 0; i < MyArr.length; i++) {
        result.innerHTML += `
            <div class="todo-item">
                <span>${MyArr[i]}</span>
                <button class="delete-btn" onclick="removeTodo(${i})">❌</button>
            </div>
        `;
    }
}






 