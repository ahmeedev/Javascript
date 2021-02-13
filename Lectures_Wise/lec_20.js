console.log('Welcome to Lecture 20');

localStorage.setItem('first','This is a deme First Value in local Storage')
localStorage.setItem('second','Second Value')
console.log(localStorage.getItem('first'))

let arr=['wire','mouse','keyboard'];
localStorage.setItem('imp',JSON.stringify(arr));

console.log(JSON.parse(localStorage.getItem('imp')));

sessionStorage.setItem('first','This is a deme First Value in local Storage')
sessionStorage.setItem('second','Second Value')
console.log(sessionStorage.getItem('first'))

let arr2=['wire','mouse','keyboard'];
sessionStorage.setItem('imp',JSON.stringify(arr));

console.log(JSON.parse(sessionStorage.getItem('imp')));




