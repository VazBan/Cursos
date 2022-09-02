
//Funcion tradicional
function saludo(){
    console.log('Hola Mundo');
}

//Funcion con ARGUMENTS
//Arguments muestra todos los valores asignados en el argumento y solo funciona en una Funcion de tipo tradicional
function numeros(numero){
    console.log(numero)
    console.log(arguments)
}

saludo();
numeros(1,2,3,4,5);

//Funcion Anonima
//Forma segura de una funcion - se declara con una constante para que no pueda ser modificada la funcion
const Saludo2 = function(){
    console.log('Hola mundo 2 ');
}
Saludo2();

const SaludoNombre = function(nombre){
    console.log('Hola ' + nombre);
}
SaludoNombre( 'Failo' );
 
//Funciones de flecha 
const FuncionFlecha = (nombre) =>{
    console.log( 'Hola ' + nombre)
}
FuncionFlecha('Rafael');