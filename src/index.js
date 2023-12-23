document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskInput = document.getElementById('taskInput');
  const submitButton = document.getElementById('submitTask');
  const taskList = document.getElementById('taskList');

  submitButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
      // Create a new list item
      const listItem = document.createElement('li');
      listItem.textContent = taskText;

      // Append the new list item to the task list
      taskList.appendChild(listItem);

      // Clear the input field after adding the task
      taskInput.value = '';
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById('taskInput');
  const prioritySelect = document.getElementById('prioritySelect');
  const submitButton = document.getElementById('submitTask');
  const taskList = document.getElementById('taskList');

  submitButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    const priorityValue = prioritySelect.value;

    if (taskText !== '') {
      // Create a new list item
      const listItem = document.createElement('li');
      listItem.textContent = taskText;

      // Add priority class to the list item
      listItem.classList.add(getPriorityClass(priorityValue));

      // Append the new list item to the task list
      taskList.appendChild(listItem);

      // Clear the input field after adding the task
      taskInput.value = '';
    }
  });

  // Function to get priority class based on the selected value
  function getPriorityClass(priority) {
    switch (priority) {
      case 'high':
        return 'high-priority';
      case 'medium':
        return 'medium-priority';
      case 'low':
        return 'low-priority';
      default:
        return '';
    }
  }

  // Event delegation for delete functionality
  taskList.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
      event.target.remove();
    }
  });
});