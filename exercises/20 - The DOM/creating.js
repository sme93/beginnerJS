console.log('it works');

const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a P element';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src =  'https://picsum.photos/500';
myImage.alt = 'Nice Photo';

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

document.body.appendChild(myDiv);

//we need to add a heading

const heading = document.createElement('h2');
heading.textContent = 'Cool Things';

myDiv.insertAdjacentElement('afterbegin', heading);

const myList = document.createElement('ul');
const firstListItem = document.createElement('li');
firstListItem.textContent = 'One';
const secondListItem = document.createElement('li');
secondListItem.textContent = 'Two';

myList.appendChild(firstListItem);
myDiv.appendChild(myList);
firstListItem.insertAdjacentElement('beforeend', secondListItem)