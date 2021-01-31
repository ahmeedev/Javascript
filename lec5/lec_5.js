console.warn('This is a lecture_5 Tutorial')
let deme;
deme=34;

deme=String(deme)
console.log(deme,(typeof deme))

deme=Number(deme)
console.log(deme,(typeof deme))

deme=Boolean(deme)
console.log(deme,(typeof deme))

deme= (String)(new Date());
console.log(deme,(typeof deme))

let arr=[1,2,3,4,5]
console.log(arr,(typeof arr))

const arr2=[1,2,3,4,5]
arr2.push(2);
console.log(arr2)


// COERCION

let e="123";
let n=123;
console.log("The result of corecion is: "+e+n)