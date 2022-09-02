//Funciones con Return


function saludar(nombre){
    console.log(nombre);

    return 10
    //Despues de return nada de lo que se escriba se va a ejecutar

    console.log('Este console nunca se va a ejecutar si esta despues de un return')
}

//Para poder manipular el valor de return se debe guardar en una variable
let retorno = saludar('Rafa');
console.log(retorno);

//Return con varios valores
const ejemplo = (name) => {
    console.log('como se deben de mostrar mas de 2 valores por return',name)

    //Para poder devolver varios valores se deben ingresar como un array
    return [1,2,3,4,'Estoy dentro de un return',name];
}

let retorno2 = ejemplo('failo');
console.log(retorno2); 
//Mostrar valores especificos de un return
console.log(retorno2[2],retorno2[4] );


//Algunos ejemplos con return en una funcion de flecha

const suma = (a,b) => {
    return a + b;
}

//Solo mostrar el valor arrojado en return
console.log(suma(1,5))

//Para guardar el valor arrojado en return 
const resultado = suma(1,3);
console.log({resultado});

//Funcion de flecha con return simplificada
//Este tipo de funcion solo se usa cuando solo se quiere regresar con return algun valor

const suma2 = (a,b) => a + b;

//solo mostrar valor resultante en return
console.log('Esta es una funcion de flecha con return simplificada',suma2 (2,3))

//Guardar valor de return y despues mostrarlo
let valor2 = suma2(2,3); /*se guarda en valor2*/
console.log(valor2);     /*Se muestra el valor guardado*/

//ejercicio

const GetAleatorio = () => Math.random();
 console.log(GetAleatorio())

