window.onload = function() {
  alert("The window has loaded!");
  onReady();
}

function onReady() {
  // a series of variables assigned to corresponding HTML elements
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById(toDoList);

  //need an event listener for when the user clicks to submit the addToDoForm
  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();
  //getting the text
  let title = newToDoText.value;

  //create a new li
  let newLi = document.createElement('li');

  //create a new input
  let checkbox = document.createElement('input');

  //set the input's type to checkbox
  checkbox.type = "checkbox";

  //set the title
  newLi.textContent = title;

  //attach the checkbox to the Li
  newLi. appendChild(checkbox);

  //attach the Li to the UL
  toDoList.appendChild(newLi);

  });
}
