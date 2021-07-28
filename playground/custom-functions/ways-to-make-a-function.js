console.log(`it works!`);


//Anon Function
// function (firstName) {
//     return `Dr. ${firstName}`;
// }

//Function Expression
// const doctorize = function(firstName) {
//     return `Dr. ${firstName}`;
// }

//Arrow Functions
const inchToCm = inches => inches * 2.54 
//if there is only one argument in arrow functions you can get rid of the 
//parenthesis
console.log(inchToCm(3));

function add(a, b = 3) {
    const total = a + b;
    return total;
}

const sum = (a, b = 3) => a + b
console.log(sum(5));

// function makeABaby(first, last) {
//     const baby = {
//         name: `${first} ${last}`,
//         age: 0
//     }
//     return baby;
// }

const makeABaby = (first, last) => ({name: `${first} ${last}`,age: 0})

console.log(makeABaby('kit', 'bos'));

//IIFE
//Immediately Invoke Function Expression

(function(age) {
    console.log(`Running the Anon Function`);
    return `You are cool and age ${age}`;
})(10)

//Methods
//A function that lives inside of an object
const wes = {
    name: 'Wes Bos',
    sayHi: function() {
        return `Hey ${this.name}`;
    },
    //shorthand method
    yellHi() {
        console.log('HEY WESSSSSS');
    },
    //arrow function
    whisperHi: () => {
        console.log('hi wesss i am a mouse');
    }
}
console.log(wes.sayHi());

//Callback Functions
//Click callback
const button = document.querySelector('.clickMe');
button.addEventListener('click', function() {
    console.log('Nice Job');
});
// function handleClick() {
//     console.log('Great Clicking');
// }

//Timer Callback
setTimeout(function() {
   console.log( 'DONE! Time to eat!');
}, 1000);