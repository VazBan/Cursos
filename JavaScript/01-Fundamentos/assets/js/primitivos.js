//inicializando una variable 
let nombre = 'Peter Parker';
console.log( nombre);

//reinicializando la varia sin volver a usar let 
nombre = 'Ben Parker';
console.log( nombre );

// typeof muestra de que tipo es nuestra variable 
console.log(typeof nombre );

//tipo de dato numerico
nombre = 123;
console.log(typeof nombre );

//tipo de dato booleans
let esMarvel = false;
console.log(typeof esMarvel );

//dato numerico 
let edad = 33;
console.log(typeof edad );

// no esta declarado el objeto
let superPoder;
console.log( typeof superPoder);

//tipo de dato null
let soyNull = null;
console.log(typeof soyNull);

//los symbols permiten crear identificadores unicos en js aunque aparentemente contengan el mismo valor
let symbol1 = Symbol ('a');
let symbol2 = Symbol ('a');
console.log(typeof symbol1);

console.log(symbol1 === symbol2)

 
