/*
"arg1" sera remplazado por los arreglos que esten dentro de los parentesis 
 en "iterar()" tambien conocido como parametro, esto es para que en la misma funcion "function iterar (arg1) " se pueda utilizar
para ejecutar distintos arreglos reutilizando el mismo codigo de la funcion*/ 

function iterar (arg1) {
    for (let i= 0; i < arg1.length; i++){
        console.log(arg1[i]);
    }
}

let numeros = [1,2,'lap',4,5]
let motos = ["Honda","Italika","Suzuki","BMW","KTM"]

iterar(numeros)
iterar(motos)