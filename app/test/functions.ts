
function addTwoNumbers(number1:number, number2:number):number{
    return number1 + number2;
}

function introduceMe(name:string, age:number):string{
    return `My name is ${name} and I am ${age} years old.`
}
function printInfo(info:string):void{
    console.log(info)
}

// let result:string = addTwoNumbers(25, 24)
// console.log(result)

let result:string = introduceMe('Shalvin', 24)
console.log(result)

printInfo('This is dummy info')