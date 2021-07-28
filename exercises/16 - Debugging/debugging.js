const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

people.forEach((person, index) => {
    console.groupCollapsed(`${person.name}`);
    console.log(person.country);
    console.log(person.cool);
    console.log('DONE!');
    console.groupEnd(`${person.name}`);
  console.log(person.name);
});



// Console Methods
console.log();
console.info();
console.error();
console.warn();
console.table(people);
console.count();
console.group();

// Callstack, or Stack Trace
//use the line numbers in your errors to trace where they are

// Grabbing Elements
//use $0 in console after selecting element in elements tab 
//$1 to get the next to last element you selected
// $ and $$ are shorthand selectors 
//$('p') will select first p tag and $$ will select all p tags

// Breakpoints
//use debugger to pause JS from running and open up new dev tools
//you can set breakpoints in the code by opening the file in the 
//sources tab in the browser and then selecting the line with a blue arrow


// Scope


// Network Requests
//under network tab in the dev tools
//can see when website is sending out data or requesting data

// Break On Attribute
//right click when selecting an element and choose Break on attribut modifications
//then go to sources and check out the debugger
//good when you are thrown into random code base
//can also do breakpoints for event listeners and fetches inside the sources tab in dev tools

// Some Setup Code

function doALotOfStuff() {
    console.group('Doing some stuff');
    console.log('Stuff');
    console.warn('whoa');
    console.error('what');
    console.groupEnd('Doing some stuff');
}

function doctorize(name) {
    console.count(`running Doctorize ${name}`)
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist(); // this will cause an error
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
