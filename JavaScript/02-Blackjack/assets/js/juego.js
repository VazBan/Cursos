

const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

//Esta funcion crea una nueva baraja
const crearBaraja = ()=>{
    
    let baraja       = [];
    for (let i = 2; i <= 10; i++) {
        for(let tipo of tipos) {
            baraja.push(i + tipo);
        }
    }

    for(let tipo of tipos) {
        for(let especial of especiales) {
            baraja.push( especial + tipo );
        }
    }
    /*
    "._shuffle" es un metodo de una libreria para ordenar aleatoriamente nuestro array llamado baraja 
    */
    baraja = _.shuffle( baraja );
    console.log( baraja );
    return baraja;
}
 

// Esta funcion me permite tomar una  carta

const pedirCarta = () => {
    
    if ( barajaR.length === 0 ) {
        throw 'No hay cartas en el deck';
    }

    const carta = barajaR.pop();
    console.log(barajaR);
    console.log(carta);
    
    return carta;
}


//SABER EL VALOR DE LA CARTA QUITANDOLE LAS LETRAS 
const valorCarta = ( carta ) =>{
    
    const valor = carta.substring(0, carta.length-1);
    return ( isNaN( valor ) ) ?
    ( valor === 'A')  ? 11 :10
    : valor * 1;
}
//Creacion de baraja
let barajaR = crearBaraja();

//Carta aleatoria
const valor = valorCarta( pedirCarta() );
console.log({valor});











