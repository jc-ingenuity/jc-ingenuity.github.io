const todoList = document.getElementById('todo-list');
const newTodoInput = document.getElementById('new-todo');
const addButton = document.getElementById('add-button');

function addTodo(text) {
  const listItem = document.createElement('li');
  listItem.textContent = text;
  todoList.appendChild(listItem);
}

addButton.addEventListener('click', () => {
  const newTodoText = newTodoInput.value.trim();
  if (newTodoText.length > 0) {
    addTodo(newTodoText);
    newTodoInput.value = ''; // Clear input after adding
  }
});

function updateTime() {
    const date = new Date();
    const hours = date.getHours() % 12 || 12;  // Convert to 12-hour format
    const minutes = date.getMinutes().toString().padStart(2, '0'); // Add leading zero for single digits
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('time').textContent = timeString;
}
  
setInterval(updateTime, 1000); // Update time every second
updateTime(); // Update time on initial load
  