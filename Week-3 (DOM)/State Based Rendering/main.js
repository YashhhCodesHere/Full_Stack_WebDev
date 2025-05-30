let todos = [];

document.querySelector("button").addEventListener("click", addTodo);

function addTodo() {
  const input = document.querySelector("input");
  const title = input.value.trim();

  if (title !== "") {
    todos.push({ title });
    input.value = "";
    render();
  }
}

function deleteTodo(index) {
  todos.splice(index, 1);
  render();
}

function render() {
  const container = document.querySelector(".todo-container");
  container.innerHTML = ""; // Clear previous content

  todos.forEach((todo, index) => {
    const todoEle = document.createElement("span");
    const deleteButton = document.createElement("button");
    const todoItem = document.createElement("div");

    todoEle.innerText = todo.title;
    deleteButton.innerText = "Delete";

    // Add delete functionality
    deleteButton.addEventListener("click", () => {
      deleteTodo(index);
    });

    todoItem.append(todoEle, deleteButton);
    container.append(todoItem);
  });
}
 