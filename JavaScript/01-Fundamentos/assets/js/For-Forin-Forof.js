const  heroes = ['Batman ','Superman','Mujer maravilla','Aquaman'];

console.warn('For Tradicional');
for( let i = 0; i < heroes.length; i++){
    console.log(heroes[i])
}

//Muestra la posicion del los elementos en un array 
console.warn('For in');
for( let index in heroes ){
    console.log(index);
}

//muestra los elementos del array
console.warn('For of');
for( let heroe of heroes ){
    console.log(heroe);
}