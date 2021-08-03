const wes = document.querySelector('.wes');
console.log(wes.children);
//emphasis tag
console.log(wes.childNodes);
//text, emphasis, text

wes.firstElementChild  //<em>
wes.lastElementChild   //<strong>
wes.previousElementSibling //null 
wes.nextElementSibling
wes.parentElement

const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p)
p.remove();
console.log(p); //still have access to it, it still exists, can add it back
