// //event hander
// const clearbtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');


// //clearbtn.addEventListener("click", runEvent);

// card.addEventListener("mousemove", runEvent);


// function runEvent(e){

//   console.log(`EVENT TYPE: ${e.type}`);
//   heading.textContent = `X: ${e.offsetX} Y:${e.offsetY}`;
// }

// //from event
// const form = document.querySelector('form');
// const taskInput = document.getElementById('task')

// //console.log(form);

// form.addEventListener('submit', runEvent);

// function runEvent(event){
//   console.log(taskInput.value);
//   event.preventDefault();
// }

document.body.addEventListener('click', runEvent);

function runEvent(e){
  if(e.target.parentElement.className === 'delete-item secondary-content'){
    console.log("delete item");
    console.log(e.target.parentElement.parentElement);
    e.target.parentElement.parentElement.remove();
    //e.target -> icon
    //e.target.parentElement -> a tag
    //a tag.parentElement -> li tag
  };
}