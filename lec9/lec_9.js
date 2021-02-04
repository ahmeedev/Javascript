console.log('you are in lecture_9')

for (let index = 0; index < 100; index++) {

    console.log('I am in Loop')
    console.error('this is error')
    
}

let a=1;
while(a<100)
{

console.log(a);

a++;

}


a=2;
do{


    console.log('we are in do loop')
a++;
}while(a<100);


let arr=[1,2,3,4,5,67,8]

arr.forEach(function(element,index,arr){
console.log(element,index,arr)

});

let obj={

'first':"first Value",
second: 12,
third:190.3


}

for(let key in obj){
    console.log(obj[key])
}




