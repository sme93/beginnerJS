// console.log('it works!');


// function calculateBill() {
// console.log('Running Calculate Bill!');
// const total = 100 * 1.13;
// return total;
// }

// const myTotal = calculateBill();
// console.log(`Your Total is ${calculateBill()}`);

function calculateBill(billAmt, taxRate) {
    const total = billAmt * taxRate
    return total;
}

const myTotal = calculateBill(100, 1.13);
const myTotal2 = calculateBill(200, 1.13);
console.log(myTotal, myTotal2);

const wesTotal = 550;
const wesTaxRate = 0.3;
const myTotal3 = calculateBill(wesTotal, wesTaxRate);
console.log(myTotal3);


function sayHiTo(firstName) {
    return `Hello ${firstName}`;
}

const greeting = sayHiTo('Wes');
console.log(greeting);


const myTotal4 = calculateBill(20 + 20 + 30 + 20, 1.13);
console.log(myTotal4);

function doctorize(name) {
    return `Dr. ${name}`
}

function yell(name = 'Silly Goose') {
    return `HEY ${name.toUpperCase()}!!!`
}

// doctorize('Wes')
const newDoc = yell(doctorize('Tuna'))
console.log(newDoc);
const noName = yell()
console.log(noName);

function calculateBillAndTip(billAmt, taxRate = 1.13, tipRate = 0.15) {
    const total = billAmt + (billAmt * taxRate) + (billAmt * tipRate)
    return total;
}
const myBillAndTip = calculateBillAndTip(100, undefined, 0.2);
console.log(myBillAndTip);

