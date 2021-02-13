console.log('Hello Lecture 18')

let button=document.getElementById('bhai')
button.addEventListener('click',show);


function show(){
    console.log('Hello i am executed by button')
}


document.addEventListener('mousemove',function(e){

document.body.style.background=`rgb(${e.offsetX},${e.offsetY},${e.offsetY-e.offsetX})`;
// document.body.style.background="rgb(155, 102, 102)"

});

