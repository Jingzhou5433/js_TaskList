//create element
const li = document.createElement('li');

//Add class
li.className = 'collection-item';

//Add id
li.id = 'new-item';

//Add attribute
li.setAttribute('title', 'New Item');

//Add textNode
li.appendChild(document.createTextNode('add item'));

//Create link element
const link = document.createElement('a');

//Add class
link.className = 'delete-item secondary-content';

//add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

li.appendChild(link);

//append li as a child
document.querySelector('ul.collection').appendChild(li);

console.log(li);