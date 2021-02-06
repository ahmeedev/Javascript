console.log("we are learnig lecture #7")

let arr=[1,2,3,4,5,6,7,"deme"]
let arr2=new Array(arr);
const arr3=arr;

console.log(arr);
console.log(arr2);
console.log(arr3);


const marks=[90,100,100,80,75,34];
console.log(Array.isArray(marks))
console.log(marks.length)
marks.push("Ahmad")
console.log(marks)
marks.unshift("firstElement")
console.log(marks)

marks.pop()
console.log(marks)
marks.shift()
console.log(marks)
console.log(marks.splice(1,3))
console.log(marks)
marks.reverse()
console.log(marks)
console.log(marks.concat("ahmad"))


// Object 


let ob={

'full name':"ahmad Tariq",
age:18,
cnic:"36501-*******-*",
gender: 'male',
ph:0303324234234324234



}

let html=`

    <h1>Welcome To the Lecture_7 Practice</h1>
    </ br>
    <h3>My Full_Name is: ${ob["full name"]}</h3> </ br>
    <h3>My Age is:  ${ob["age"]}</h3> </ br>
    <h3>My Phone# is:  ${ob["ph"]}</h3> </ br>
    <h3>My CNIC# is:  ${ob["cnic"]}</h3> </ br>
`;


document.body.innerHTML=html;


