console.log('hello i\'m in lecture_12')

let a=document.all;

// Array.from(a).forEach(function(element){

// console.log(element)

// });

// a=document.images[0].baseURI;
// document.location.href=a;


// a=document.images;

let text='google';

console.log(document.links.length)

let b;
for(let i=0; i<document.links.length; i++){
    
    a=document.links[i].href;
    console.log(a);

    if(document.links[i].href.includes(text))
    b=document.links[i].href;
}

console.log('this link contains google keyword')
console.log(b);

//var fs=require('fs');








