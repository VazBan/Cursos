const elMayor = (a, b ) => ( a > b ) ? a : b;

const tieneMembresia = ( miembro ) => ( miembro ) ? '2 Dolares' : '10 Dolares'

console.log( elMayor(20,9) );

console.log(tieneMembresia(false));

const amigo = false;
const amigosArr = [
    'Peter',
    'Tony',
    'Venom',
    amigo ? 'Canelo' : 'Manchas',
    ( ()=> 'Machin') (),
    elMayor(2,25)
];

console.log( amigosArr);

const nota = 85; // A+,A,B+,B..
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A'  :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B'  :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C' : 'F';
console.log({nota, grado})