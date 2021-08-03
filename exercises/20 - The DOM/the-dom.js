// const p = document.querySelector('p');
// const img = document.querySelectorAll('.items img');
// const heading = document.querySelector('h2');
// console.dir(heading);
// //this will give a list of all the properties of the element
// console.log(heading.textContent)
// //this is a getter
// heading.textContent = 'Wes is cool';
// //this is a setter
// console.log(heading.textContent)
// console.log(heading.innerText);
// //textContent gets all of the elements and innerText only gets human readable elements


// console.log(heading.innerHTML);
// console.log(heading.outerHTML);
// heading.insertAdjacentText('beforeend', 'SME');
// heading.insertAdjacentText('afterbegin', 'SME');
// //best way to tack on text to a node/element

// const pic = document.querySelector('.nice');
// pic.classList.remove('cool');
// console.log(pic.classList);
// pic.addEventListener('click', toggleRound);

// function toggleRound() {
//     pic.classList.toggle('round');
// }

// pic.alt = 'Cute Pup'; //setter
// pic.width = 200;
// console.log(pic.alt); //getter
// console.log(pic.naturalWidth);

// pic.addEventListener('load', function() {
//   console.log(pic.naturalWidth);
// })

// console.log(pic.setAttribute('alt', 'NOT A PUP ANYMORE'));
// console.log(pic.getAttribute('alt'));


const custom = document.querySelector('.custom');
console.log(custom.dataset);
//this will give you all the data on the element

custom.addEventListener('click', function() {
  alert(`welcome ${custom.dataset.name}`)
})
