// function add(num1,num2){
//     var sum= num1+num2;
//     return sum;
// }

// const result1=add(28, 29);
// console.log('noo');
// const result2=add(7,8);
// const finalResult=add(result1,result2)
// console.log(finalResult);

function add(number1,number2,number3){
    var sum=number1+number2+number3;
    return sum;
}

const num1=add(10,25,20);
const num2=add(40,15,90);
const num3=add(30,5,30);

var total=add(num1,num2,num3);
console.log(total);


function add(num1,num2,num3){
    var sum= num1+num2+num3;
    return sum;
}

const number1=add(1,2,3);
const number2=add(4,5,6);
const number3=add(7,8,9);

var total=add(number1,number2,number3);
console.log('total sum',total);