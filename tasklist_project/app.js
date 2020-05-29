//replace heading

//create element
const newHeading = document.createElement('h3');

//add id
newHeading.id = 'task-title';

// add text node
newHeading.appendChild(document.createTextNode('Task List'));

//Get the old heading
const oldHeading = document.getElementById('task-title');

//Parent
const cardAction = document.querySelector('.card-action');
console.log(cardAction)
cardAction.replaceChild(newHeading, oldHeading);

//remove list element

const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

console.log(list)
lis[0].remove()

//remove child element
list.removeChild(lis[2])