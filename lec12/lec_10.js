console.log('Wecome to the Lecture_10');
 
function ahmad(name){

console.log(`Hello Parameter: ${name}`)

}


ahmad('Parameter 1');
ahmad('Parameter 2');
ahmad('Parameter 3');
ahmad('Parameter 4');
ahmad('Parameter 5');


function forReturn(){

let deme1=100;
let deme2='This string is in the Function';

return deme1+", "+deme2;

}


let value=forReturn();
console.log(value)

let obj={

    name: 'Ahmad Tariq',
    game:function(yourChoice){
        return 'Your game is : '+yourChoice;
    },
    marks: 100

}

let hold=obj.game('Gta V');
console.log(hold); 



{
let new1=12;
console.log(new1)

let local=function(){
    console.log('This is a local function')
}
var local2=function(){
    console.log('This is a local2 function')
}

}

local2()
local()