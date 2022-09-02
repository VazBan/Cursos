


let a = 25;

let b = a;

a = 20;

console.log({a , b}); 



let arr1 = [ 'Rafael', 26,'Capacha #32',];
console.log(arr1);

let arr2 = [...arr1];
console.log(arr2);

arr2.push('masin');
console.log(arr1,arr2)










const Prueba = ( argument ) => {
    argument.nombre = 'failo'
    return argument
};

let persona1 = {nombre:'Alejandro'};
console.log('Persona1:',persona1);

let persona2 = Prueba({...persona1});

console.log( 'nombre1:',persona1,'nombre2:', persona2);
