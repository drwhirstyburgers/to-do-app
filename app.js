window.onload = function() {
  alert("The window has loaded!");
  onReady();
};

function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  //add event listener for the addToDoForm
  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();

  //Next we need to code for what we want to happen when the code is submitted

  //get the text from newToDoText
  let title = newToDoText.value;

  //create a new li in the ul block
  let newLi = document.createElement('li');

  // create a new input
  let checkbox = document.createElement('input');

  //creat another input for a remove button
  let removeButton = document.createElement('input');

  //set the input's type to checkbox
  checkbox.type = "checkbox";

  //set the second input type to button
  removeButton.type = "button";

  // REMOVE to do
  removeButton.onclick = function(e){ deleteTodo(e)};

  //set the text in the button to 'remove'
  removeButton.value = "delete";

  //etsablish the type of the new button
  removeButton.type = "submit";

  //set the text content of the new li to the let title using 'textContent'
  newLi.textContent = title;

  //attache the checkbox to the new Li
  newLi.appendChild(checkbox);

  //append the button to the Li
  newLi.appendChild(removeButton);

  //attache the new li to the ul
  toDoList.appendChild(newLi);

  //empty the input
  newToDoText.value = '';

  function deleteTodo(e){
  console.log(e)
        let li = e.target.parentNode;
                 let ul = li.parentNode;
                 ul.removeChild(li);
               }
    });
  }
