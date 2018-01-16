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
  id: id++,
  });

  newToDoText.value = '';

  renderTheUI();
  }

  function deleteToDo(id) {
    toDos = toDos.filter(items => items.id !== id);
    if(toDos == true){
      remove(toDo);
    }
    renderTheUI();
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
         deleteButton.value = "remove";
         deleteButton.addEventListener('click', function() { deleteToDo(toDo.id); });
         deleteButton.addEventListener('click', event => {
           event.preventDefault();
         });

         newLi.textContent = toDo.title;

         toDoList.appendChild(newLi);
         newLi.appendChild(checkbox);
         newLi.appendChild(deleteButton);
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
