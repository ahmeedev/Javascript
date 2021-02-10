console.log('Welcome To Lecture 16')

let element = document.createElement('a');
element.innerText='Hello i am Ahmad';
//element.innerHTML='<b> </b>'
//element.id='firstElement';
//element.className='deme deme2';
//element.setAttribute('align','center');
//element.align='left';

console.log(element)

let select=document.querySelector('div')
select.appendChild(element)
//console.log(select)
console.log(select)
console.log(element)

select.replaceChild(element,document.getElementById('to'));
select.removeChild(element)

console.log(select.hasAttribute('href'))
console.log(select.removeAttribute('href'))


// quiz solved..

let ele=document.createElement('h1');
let hold=document.getElementById('ahmad');
hold.innerHTML='<a href=\'https://google.com\' > Click here to open Google</a>'