console.log("we are at the tutorial 6")

var str1='Hello i am Ahmad';
let str2=`Son of Tariq Mehmood`;

console.log(str1.concat(' '+str2))
console.log(str1.toLowerCase())
console.log(str1.toUpperCase())
console.log(str1[4])
console.log(str1.indexOf('Ahmad'))
console.log(str1.charAt(3))
console.log(str1.endsWith('Ahmad'))
console.log(str1.includes('am'))
console.log(str1.substring(1,4))
console.log(str1.slice(-7))
console.log(str1.split(" "))
console.log(str1.replace('Ahmad','hamad'))


// Here is the Template Literals
let name="Ahmad"
let html= `My name is ${name}
<h1> Do you know? ${str1} </h1>
<h2> also , ${str2} <h2>


`;
document.body.innerHTML=html;






