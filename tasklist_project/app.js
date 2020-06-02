//fetch UI var
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const filter = document.querySelector('#filter');
const clearBtn = document.querySelector('.clear-tasks');
const taskInput = document.querySelector('#task');

loadEventListeners();

function loadEventListeners(){
  //DOM load event 
  document.addEventListener('DOMContentLoaded', getTasks);
  //load Tasks
  form.addEventListener('submit',addTask);

  //remove tasks
  taskList.addEventListener('click', removeTask);

  //clear tasks
  clearBtn.addEventListener('click', clearAll);

  //Task filter
  filter.addEventListener('keyup',filterTasks);
}

function getTasks(){
  //check if local storage if empty
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = []
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(task){
    //create li element
    const li = document.createElement('li');
    // add class
    li.className = 'collection-item';
    //append text
    li.appendChild(document.createTextNode(task));
    //create link element
    const link = document.createElement('a');
    //add class
    link.className = 'delete-item secondary-content';
    // add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // append link to li
    li.appendChild(link);

    //append li to ul
    taskList.appendChild(li);
  })

}

function addTask(e){
  if (taskInput.value === ''){
    alert("Please enter a task");
  }
  else{
  //create li element
  const li = document.createElement('li');
  // add class
  li.className = 'collection-item';
  //append text
  li.appendChild(document.createTextNode(taskInput.value));
  //create link element
  const link = document.createElement('a');
  //add class
  link.className = 'delete-item secondary-content';
  // add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // append link to li
  li.appendChild(link);

  //append li to ul
  taskList.appendChild(li);

  //store in Local storage
  storeInLocal(taskInput.value);

  //clear the input area
  taskInput.value = "";
  }
  
  e.preventDefault();
}

function storeInLocal(task){
  console.log('in the store function');
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = []
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));

}

function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    // find the li element
    
    e.target.parentElement.parentElement.remove();
   
    // delete from the local storage
   removeFromLS(e.target.parentElement.parentElement);
    
  
  }
  e.preventDefault()
}

function removeFromLS(taskItem){
   //check if local storage if empty
   let tasks;
   if(localStorage.getItem('tasks') === null){
     tasks = []
   }else{
     tasks = JSON.parse(localStorage.getItem('tasks'));
   }
   tasks.forEach(function(task,index){
     if(taskItem.textContent === task){
       tasks.splice(index, 1);
     }
   });

   localStorage.setItem('tasks', JSON.stringify(tasks));
   //console.log(localStorage.getItem('tasks'));
}

function clearAll(){
  //Faster
  list = document.querySelectorAll('li');
  console.log(list);
  for(let i = 0; i<list.length; i++){
    list[i].remove();
  }
  //or
  //taskList.innerHTML = '';

  //clear all tasks from local storage
  claerAllFromLS(list);
}

function claerAllFromLS(tasksList){
  localStorage.clear();
}

function filterTasks(e){
  const text = filter.value.toLowerCase();
  console.log(text);
  document.querySelectorAll('li').forEach(
    function(task){
      const item = task.textContent.toLocaleLowerCase();
      if(item.indexOf(text) != -1){
        task.style.display = 'block';
      }else{
        task.style.display = 'none';
      }
    }
  )

}