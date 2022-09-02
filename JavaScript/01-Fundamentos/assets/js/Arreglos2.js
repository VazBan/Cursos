/*
Crear un array
-Crea  una variable: "juegos"
- Inicializar su contenido dentro de 2 corchetes: "[]"
- Introducir los elementos deseados dentro de los corchetes: "['zelda','Mario','Metroid','Chrono'];"
*/
let a =25;
console.log(a);
let juegos = ['zelda','Mario','Metroid','Chrono'];

/*Saber el tamaño del array
-Nombre del array: "juegos"
-Agregar: ".length"
-Resultado final: "juegos.length"
 */

console.log('Largo:', juegos.length);

/*Imprimir algun elemento del array 

- Nombre de la variable que contenga la array y agregamos corchetes "[]" 
- Dentro de estos poner la posicion en donde se encuetra nuestro elemento recordando que se empieza a 
contar como la primera posicion desde el 0 */

let ultimo = juegos [juegos.length - 1];
 /* 
 -Se pueden ejecutar operaciones matematicas dentro de los corchetes
 -En este caso se esta consultando el numero de elementos por los cuales esta 
 compuesto el array "juegos" para despues restarle al total -1 lo que nos dara
 un numero menor de la longitud y asi poder imprimir el elemento que 
 esta en la ultima posicion en nuestra array
 - El arraya se empieza a contar desde la posicion 0, por lo que si queremos sabar cual es la ultima posicion 
 de nuestro array tendremos que restar -1 aal total de elementos que se encutrer dentro de  este para asi saber 
   cual es nuestra ultima posicion}
 */

console.log(ultimo)

juegos.forEach( (elemento,indice,arr) => {
console.log({elemento,indice,arr});
});

/*Agregar nuevos elemenos al final del array:

-Para agregar nuevos elemenos al final del array es el nombre de la variable que contiene el arreglo + ".push" y entre 
 parentesis "()" agregar el nuevo elemento 
-En esta caso seria: "juegos.push("RE4")"
*/
debugger
let nuevolargo = juegos.push("RE4");
console.log(nuevolargo);
console.log(juegos)


/* Agregar nuevos elemenos al inicio del array

-Nombre de la variable que contiene el array: "juegos"
-Agregar: ".unshift"  
-Agregar parentesis: "()" 
-Dentro de los parentesis agregar el nuevo elemento: "("boordelans")"
-Resultado final: "juegos.unshift("boordelans")"
*/

nuevolargo = juegos.unshift("boordelans"); 
console.log(nuevolargo,juegos);



/*Borra el ultimo elemento de un array

-Nombre del array: "juegos" 
-Agregar: ".pop"  
-Agregar parentesis: "()"
-Dentro de los parentesis no se agrega nada
*/

let juegoborrado = juegos.pop();
console.log({juegoborrado,juegos});

/* Borrar  elementos de un array en una posicion especifica 

-Crear una variable con el numero de la posicion de donde partiremos: "let inico = 1"
-Escribir el nombre del array "juegos" junto con ".splice() " algo como: "juegos.splice()"
-Escribir dentro de los () la varible donde especificamos de donde partiremos y despues espeficiar cuantos
elementos queremos borrar
-Todo completo quedaria asi: "juegos.splice(inicio,2)"
*/

let inicio = 1;

let juegosb = juegos.splice(inicio,2);

console.log({juegosb,juegos})

/* Buscar la posicion dentro del index de un elemento en array

 -Agregar al nombre del Array "juegos" lo siguiente: "indexOf()" 
 -Dentro de los parentesis poner el nombre del stringh que se desea: "("boordelans")"
 -Resultado final: juegos.indexOf("boordelans")
*/
let search = juegos.indexOf("boordelans");
console.log({search})

a++;
console.log(a);