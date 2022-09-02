//Tip
/*Cuando el nombre de la propiedad es el mismo nombre de la variable basta con solo poner el nombre la propiedad
Ejemplo:

Antes:
Funcion tradiconal
function CrearPersona(nombre, apellido) {
    return{
        nombre: nombre,
        apellido: apellido
    }
}

Despues:
function CrearPersona(nombre, apellido) {
        return{
             nombre,
             apellido
    }
}
*/
//Como Funcion de Flecha

/* Usar "()" para regresar con "return" un objeto "{}" dentro de una funcion de flecha*/

const CrearPersona = (nombre,apellido) => ({nombre,apellido}); 

const persona = CrearPersona(  'Rafael','Vazquez');
console.log(persona);


//Funcion tradicional con argumentos
function imprimeArgumentos(){
    console.log ({arguments});
}

imprimeArgumentos(10, true, false, 'Fernando','Hola');

//Funcion de flecha con argumentos

// Mostrar todos los argumentos en un funcion de flecha
// Agregar "..." antes del nombre del argumento "arr"
// Agregar algo Primero que los "..." pasara a tener su propio valor independiente

// Imprimen los argumentos dentro de la funcion mas no se guardan ni se retorna nada
const imprimeArgumentos2 = ( experiencia,...arr) => {
    console.log({experiencia,arr});
  
}
imprimeArgumentos2(5, true, false, 'Rafael','Adios');

//Funcion de flecha con argumentos y return

const imprimeArgumentos3 = (...arr) => arr;

//Declarar varias variables dentro de "[]" 
//Seran asignadas con los valores que retorna la funcion "imprimeArgumento3"

const [Edad, casado, Muerto, Name, Despedida] = imprimeArgumentos3(26, true, false, 'Alejandro','Hasta luego');

//Imprimir multiples varibles dentro de un cosole log
console.log({Edad, casado, Muerto, Name, Despedida});

//Guardar solo la propiedad deseada de un objeto  que esta dentro de una funcion
//Declarar la propiedad deseada dentro de {}
//La propiedad debe de existir dentro de la Funcion de flecha
//Imprimir con el nombre de la propiedad si asi lo desea
const {apellido} = CrearPersona(  'Rafael','Vazquez');
console.log({apellido})

//Guardar la propiedad especifica de objeto quen esta dentro de una funcion de flecha en en varible con otro nombre  
//Nombre de la propiedad dentro de "{}"
//Agregar " : "
//Nombre de la varible donde se almacenara "Lastname"
const {apellido:Lastname} = CrearPersona(  'Rafael','Vazquez');
console.log({Lastname})


const Lore = ({Name,Age,School,Games,Animals}) => {
    
    console.log({Name,Age,School,Games,Animals});    
}


let Hermana = {
    Name:"Lorena",
    Age: 13,
    School:"Jose Vasconselos",
    Games: ["Mario Kart,Smash,mario Party"],
    Animals: "Dogs"
};

Lore(Hermana)




