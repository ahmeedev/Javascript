console.time('take time: ')
console.error("this is a error")
console.warn('this is a warning')
console.log('this is a msg')
console.table(['first','second'])
console.timeEnd('take time: ')

var age=12;
const ok='Age is ok'
const no='Age is no'

if(age<18)
console.assert(age>18,no)

{
    let age=19;
    console.assert(age>18,ok)
}

