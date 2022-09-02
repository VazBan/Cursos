
let User = {
    Name : 'Rafael',
    LName : 'Vazquez Banda',
    Age : 26,
    Weight : ' 115Kg',
    Adress: {
        Street1 : 'Arrayan',
        Street2 : 'Cedro' 
    },
    School: 'Icep',
    Hobbies : ['Music','Movies','Games','Walk'],

};
console.log(User);
console.log(User.School);
console.log('Your Age is:',User.Age);
console.log ('Calle:' ,User.Adress.Street1,'con:',User.Adress.Street2);
console.log('Hobby:',User.Hobbies[2]);
console.log('Length:',User.Hobbies.length);

/* elimina una propiedad dentro del objeto*/

delete User.School;
console.log(User);

/* Agregar nueva propiedad al objeto */
User.casado = true;


/* 
Convierte el objeto "User" a tipo array 
*/
const entriespares = Object.entries(User);
console.log(entriespares)

/* no deja agregar,quitar o editar propiededaes al objeto pero si su contenido de estos en "User"*/
Object.freeze(User)

User.money = 100

console.log(User)
/*Al imprimir de nuevo el objeto "User" no mostrara money ya que con "Object.freeze" no nos permite modificar
el objeto */

User.Adress.Street1 = 'Capacha';
console.log(User.Adress.Street1)
console.log(User);

/*Mostrar todas la propiedades del objeto en el order que fueron creados*/
const propiedades = Object.getOwnPropertyNames(User)
console.log({propiedades});

/*Mostrar todos los valores de las propiedades dentro del objeto*/
const valores = Object.values(User);
console.log(valores);

