const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handleClick() {
  console.log("it was clicked");
}

const hooray = () => console.log("HOORAY");

butts.addEventListener('click', handleClick);
coolButton.addEventListener('click', hooray);

butts.removeEventListener('click', handleClick);

//Listen on multiple items

const buyButtons = document.querySelectorAll('button.buy');

// function buyItem() {
//   console.log('Buying item');
// }

// // function handleBuyButtonClick(button) {
// //  button.addEventListener('click', buyItem);
// // }

// //buyButtons.forEach(handleBuyButtonClick);
// buyButtons.forEach((button) => {
//   button.addEventListener('click', () => {
//     console.log('YOU CLICKED IT');
//   })
// })

function handleBuyButtonClick(event) {
  console.log('You clicked a button');
  const button = event.target;
  console.log(button.textContent);
  console.log(parseFloat(event.target.dataset.price));
  console.log(event.currentTarget);
  //stop this event from bubbling up
  //event.stopPropagation();
}

buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener('click', function(event) {
  console.log('You clicked on the window');
  console.log(event.target);
}, {
  capture: true,})
  //this will give you the window first instead of the button
  //then add stopPropagation to stop it at the window level

  //event.target
  //event.type
  //event.bubbles

const photo = document.querySelector('.photo');
photo.addEventListener('mousemove', function(event) {
  console.log(event.currentTarget);
  console.log(this);
  //better to use currentTarget or target instead of the this keyword
})

//mouseenter






