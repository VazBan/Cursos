

let a = 23 ;

if( a  <  10){
    console.log(  'a es menor que 10' );
}else{
    console.log('a es mayor que 10 ')
}

console.log ('fin de programa');

let hoy = new Date();
let dia = hoy.getDay();

console.log({dia})


let x = 2
if ( x === 1 ){
    console.log('Hoy es lunes')
}else if( x === 2){
    console.log('HOy es martes')
}else if (x === 3){
    console.log('HOy es miercoles')
}else if( x === 4 ){
    console.log('hoy es viernes')
}else if (x === 5){
    console.log('Hoy es viernes')
}else if(x ===6){
    console.log('hoy es sabado')
}else if(x === 0){
    console.log('Hoy es domingo')
}else{
    console.log('numero incorrecto')
}