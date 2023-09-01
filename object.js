// var myIntroduction = {
//     name: 'MD Sadnan Hossen Shafin',
//     Height: '5"8',
//     skinTone: 'light',
//     Look: 'cute',
//     age: 19
// }
// console.log(myIntroduction);
// console.log(myIntroduction.name);
// console.log(myIntroduction.Height);
// console.log(myIntroduction.Look);
// console.log(myIntroduction.age);
// myIntroduction.age = 20;
// console.log(myIntroduction.age);


// var meAndShe = {
//     status: 'in a relationship',
//     age: '18,19',
//     firstMeet: 7
// }

// console.log(meAndShe);
// console.log(meAndShe.status);
// console.log(meAndShe.age);
// meAndShe.age='28,29';
// console.log(meAndShe.firstMeet);
// console.log(meAndShe.age);


var shoppingCart={
    pen:20,
    book:100,
    eraser:34,
    scale:18
}

console.log(shoppingCart);

var newN=shoppingCart.pen;
console.log(newN);

var newN2=shoppingCart['scale'];
console.log(newN2);

var properties= Object.keys(shoppingCart);
var propertyValues= Object.values(shoppingCart);
console.log(properties);
console.log(propertyValues);



