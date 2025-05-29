// Function to add a new todo item to the list
function addTodo() {
    const todoInput = document.querySelector(".todo-input");
    const todoList = document.querySelector(".todo");

    // Prevent adding empty todos
    if (todoInput.value.trim() === "") return;

    // Create a new <li> item
    const todoItem = document.createElement("li");

    // Set the todo text
    todoItem.textContent = todoInput.value;

    // Create the delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "DELETE"; // You can also use "Delete" text
    deleteBtn.className = "delete-btn";

    // Add functionality to delete the todo when button is clicked
    deleteBtn.addEventListener("click", () => {
        todoItem.remove();
    });

    // Append delete button to the todo item
    todoItem.appendChild(deleteBtn);

    // Add the todo item to the list
    todoList.appendChild(todoItem);

    // Clear the input field
    todoInput.value = "";
}

// Allow pressing Enter to submit
document.querySelector(".todo-input").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTodo();
    }
});
