// var items={
//     chicken:250,
//     beef:750,
//     veges:70
// }

// const key= Object.keys(items);
// console.log(key);

// const value= Object.values(items);
// console.log(value);

// for(var i=0; i<key.length;i++){
//     var propertyName=key[i];
//     var propertyValue=items[propertyName];
//     console.log(propertyName ,propertyValue);
    
// }

// for in loop

// for(var propertyName in items){
//     const value= items[propertyName];
//     console.log(propertyName,value);
// }


var age={
    shafin:19,
    shaila:18
}

const key= Object.keys(age);
console.log(key);

const value = Object.values(age);
console.log(value);

// for(var i=0; i<key.length;i++){
//     var propartyName=key[i];
//     var propartyValue= age[propartyName];
//     console.log(propartyName, propartyValue);
// }

/*========================
       for in loop 
=========================*/
for(var propartyName in age){
    const propertyValue =age[propartyName];
    console.log(propartyName,propertyValue);
}
