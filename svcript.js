
function handleSubmit(event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Get the value from the input field
    var taskName = document.getElementById('name').value;

    // Create a new list item (li) element
    var li = document.createElement('li');
    li.textContent = taskName;

    // Create delete button
    var deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function() {
        li.remove(); // Remove the task item when delete button is clicked
    };

    // Append the delete button to the list item
    li.appendChild(deleteBtn);

    // Append the new task to the 'tasks' list
    var tasksList = document.getElementById('tasks');
    tasksList.appendChild(li);

    // Clear the input field after submitting
    document.getElementById('name').value = '';
}
