const item = document.querySelector('.item');
console.log(item.innerHTML);
item.innerHTML = `<div>
                    <h1>Hey how are ya?</h1>
                  </div>`
console.log(item.innerHTML);


const src = `https://picsum.photos/200`;
const desc = `Cute PUP`;

const myHTML = `
<div>
  <h2>${desc}</h2>
  <img src="${src}" alt="${desc}"/>
</div>`;

//item.innerHTML = myHTML;
console.log(typeof myHTML);
//myHTML is NOT an element, it is just a string
//if you want to dynamically change any of attributes you have to first
//dump it into the DOM and pull it out after the fact


//turn a string into a DOM element
const myFragment = document.createRange().createContextualFragment(myHTML);
console.log(myFragment);
document.body.appendChild(myFragment);

//cross site scripting XSS
//updating profile - if someone puts HTML into that they can hijack the site
