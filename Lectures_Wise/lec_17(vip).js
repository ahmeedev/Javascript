console.log('Welcome to Lecture_17');

let element=document.querySelector('.first');
console.log(element)
 
// element.addEventListener('click',function(){

//     console.log('you click the first class element')
//     element.style.color='green';
// })

// element.addEventListener('mouseover',function(){

//     console.log("mouse enter")
//     element.style.color='red';

// })


document.addEventListener('copy',function(){
    console.log('Text Copied')
})

document.addEventListener('click',function(e){
    if(e.target.id=='ah')
    {
        console.log('you reached the level')
    }
})
