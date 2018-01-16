function onReady() {
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  let id = 0;

  function createNewToDo() {
  if (!newToDoText.value) { return; }
  toDos.push({
  title: newToDoText.value,
  complete: false,
  id:
  });

  id++;

  newToDoText.value = '';

  renderTheUI();
  }

  function deleteToDo(item.id) {
    toDos = toDos.filter(item => item.id !== id);
    if(toDos == true){
      remove(toDo);
    }
  }

  function renderTheUI() {
       const toDoList = document.getElementById('toDoList');

       toDoList.textContent = '';

       toDos.forEach(function(toDo) {
         const newLi = document.createElement('li');
         const checkbox = document.createElement('input');
         checkbox.type = "checkbox";
         const deleteButton = document.createElement('input');
         deleteButton.type = "button";
         deleteButton.addEventListener('click', function() { deleteToDo(toDo.id);
         renderTheUI();
       });


         newLi.textContent = toDo.title;

         toDoList.appendChild(newLi);
         newLi.appendChild(checkbox);
       });
     }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    newToDoText.value = '';
   });
   renderTheUI();
}

window.onload = function() {
  onReady();
};
