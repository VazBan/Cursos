
//Problema al querer asignar una copia de una variable otra

let a = 5;
console.log(a);

let b = a ;
console.log(b);

a = 30;

console.log({ a, b})

//al modificar el valor de 'a' tambien se modifica el valor de 'b' lo cual no es resultado deseado

//problema al  hacer una copia de un objeto a otra variable y al modificar la variable original se modifica tambien la copia 

//variable Original
let juan = { nombre:'Juan'};
console.log( {juan} );  

//Copia de nuestra variable original 
let ana = juan;
console.log( {ana} );

//Reasiganar el valor del objeto de la copia
ana.nombre = 'ana';
console.log( ana );

//impresion de las 2 variables 
console.log( {juan, ana});

//El problema :
// Al modificar los valores del objeto en la copia no solo se afecta a esta sino tambien a la variable original lo cual no es resultado deseado 

const Newname = ( persona ) => {
    persona.nombre = 'Rafael'
    return persona; 
};

let Alejandro = {nombre:'Alejandro'}; //Rafael
  
console.log(Alejandro);

let Vazquez = Newname(Alejandro); //Rafael

console.log({ Alejandro, Vazquez});
