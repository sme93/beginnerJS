const first = 'wes';
let second = 'bos';
var age = 100;
//var variables are attached to the window object, can do window.age
//functions are also available with window.sayHi()
function sayHi() {
    console.log('hi');
}

function go() {
    const age = 200;
    const hair = 'blonde';
    console.log(age);
    console.log(hair);
}
//hair is function scoped and will not be available outside of the function, 
//even if we run the function
go();



function isCool(name) {

    let cool;
    if (name === 'wes') {
        cool = true;
    }
    console.log(cool);
    return cool;
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}

const dog = 'snickers';

function logDog() {
    console.log(dog);
}

function goGo() {
    const dog = 'sunny';
    logDog();
}

goGo();
//will it log sunny or snickers? 
//snickers because of static scoping
//the way that scope lookup happens is where the variables are defined and not
//where its defined

//BEST PRACTICE

//try not to create global variables
//functions are scoped the exact same as variables
