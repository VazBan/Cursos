/*
-Lunes a Viernes  apertura a las 11
-Sabado y Domingo apertura a las 9
*/
const dia = 2 // 0:Domingo, 1:Lunes...
const horaActual = 8 ;

let horaApertura;
let mensaje;// Esta abierto,Esta cerrado,Abrimos a las xx


//Metodo tradicional 
if ( dia === 0 || dia === 6 ){
    console.log ('Fin de semana');  horaApertura = 9;    
}else{
    console.log('Dia entre Semana');
    horaApertura = 11;
}

if (horaActual >= horaApertura){
    mensaje = 'Esta abierto';
}else{
    /*Metodo para concatenar strings 
    -Se cambian las comillas "" por ´´
    -Para concatenar strings se agrega ${}
    */
    mensaje = `Esta cerrado,hoy abrimos a las ${ horaApertura }`}

    console.log({horaActual,horaApertura,mensaje});

//Metodo con .includes
if ([0,6].includes( dia ) ) {
    console.log('Fin de semana');
    horaApertura = 9
}else{
    console.log('Dia entre semana');
    horaApertura = 11
}

if (horaActual >= horaApertura){
    mensaje = 'Esta abierto';
}else{
    /*Metodo para concatenar strings 
    -Se cambian las comillas "" por ´´
    -Para concatenar strings se agrega ${}
    */
    mensaje = `Esta cerrado,hoy abrimos a las ${ horaApertura }`
    console.log({horaActual,horaApertura,mensaje});
}
 //Operador ternario
 /*
 -? Se entiende por "si la condicion se cumple" 
 - : Se entiende por "Si la condicion no se cumple"
 */

horaApertura = ( [0,6].includes( dia ) ) ?9 : 11;

mensaje = ( horaActual >= horaApertura ) ? 'Bienvenido está abierto' :`Lo sentimos,esta cerrado-hoy abrimos a las ${ horaApertura }`;

console.log({ horaApertura,mensaje,horaActual });