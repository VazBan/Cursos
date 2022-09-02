

const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}
//Negacion " ! "
console.warn('Not o la negacion   ');

console.log ( true );

console.log( !true )//false
console.log( !false )//true

console.log( !regresaFalse() );//True
/*
Regresara true si todas las condiciones son true
Regresa false si una condicion es false
*/
console.warn('And');
console.log( true && true);//Resulta true
console.log( true && false);//Resulta false
console.log( true && !false);//Resulta true ya que false se esta negando con el operador "!" y se convierte en true

console.log('===========');
/*ejecutara solo la primera funcion ya que el resultado de esta es false */
console.log(  regresaFalse() && regresaTrue());//Se dentendra hasta encontrar el primer false

console.log('============');
/*ejecutara las dos funcion ya que el resultado de la primera es true y el de la segunda es false  */
console.log( 'a',regresaTrue()  && regresaFalse());//Se detendra hasta encontrar el primer false

console.warn('OR'); //Buscara el primer true
console.log( true||false );//mostrar el primer true que encuentre
console.log( false||false);//Solo mostrar false si todos los resultados son false

console.log(  regresaTrue()  || regresaFalse());//Se dentendra hasta encontrar el primer true
