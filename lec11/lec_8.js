console.log("Welcome to the lecture_8 practice")

console.log("Enter Your Marks: ")

var marks;

if(typeof marks !=='undefined')
{
    alert('Marks are defined');
}else{
    console.warn('This is a deme warning') 
}


marks=93;


if(marks=>40 && marks<=100 ){
    alert('Congratulation you are Passed with good marks')

}
else{
    console.error('You are failed')
}



switch(marks){

case (14):
console.log('you are failed')
break;

default:
    console.log('you are passed')
;
}


console.log(marks>50? 'you are ok' : 'you are failed')

