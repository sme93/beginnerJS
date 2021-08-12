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

function buyItem() {
  console.log('Buying item');
}

// function handleBuyButtonClick(button) {
//  button.addEventListener('click', buyItem);
// }

//buyButtons.forEach(handleBuyButtonClick);
buyButtons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log('YOU CLICKED IT');
  })
})