

const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];


//Puntos Jugadores
let puntosJugador     = 0 ;
    puntosComputadora = 0 ;

//Referencias HTML
const btnPedir             = document.querySelector('#btnPedir');
const btnNuevo             = document.querySelector('#btnNuevo');
const btnDetener           = document.querySelector('#btnDetener');
const puntosHTML           = document.querySelectorAll('small');
const divCartasJugador     = document.querySelector('#Jugador-cartas');
const divCartasComputadora = document.querySelector('#Computadora-cartas')

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
    
    //"._shuffle" es un metodo de una libreria para ordenar aleatoriamente nuestro array llamado baraja 
    baraja = _.shuffle( baraja );
    console.log( baraja );
    return baraja;
}

//Creacion de baraja
let barajaR = crearBaraja();
 
// Esta funcion me permite tomar una  carta
const pedirCarta = () => {
    
    if ( barajaR.length === 0 ) {
        throw 'No hay cartas en el deck';
        console.log(barajaR);
    }
     const carta = barajaR.pop();
     
    return carta;
}

//SABER EL VALOR DE LA CARTA QUITANDOLE LAS LETRAS:2H = 2 
const valorCarta = ( carta ) =>{
    
    const valor = carta.substring(0, carta.length-1);
    return ( isNaN( valor ) ) ?
    ( valor === 'A')  ? 11 :10
    : valor * 1;
}

//Turno de la computadora

const turnoComputadora = ( puntosMinimos ) =>{

    do{
//Puntos computadora
    const carta = pedirCarta();
    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHTML[1].innerText = puntosComputadora;
//Mostrar cartas computadora
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    divCartasComputadora.append(imgCarta);

    if( puntosMinimos > 21){
        break;
    }

    }while( ( puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );

}

//Eventos 

//Jugador 
btnPedir.addEventListener('click',() => {
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;
//Mostrar cartas jugador
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);
//Logica de jugador
    if (puntosJugador > 21 ){
        console.warn('Lo siento,perdiste')
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    }else if( puntosJugador === 21 ){
        console.warn('21,genial');
        turnoComputadora(puntosJugador);
    }
});

btnDetener.addEventListener('click',() => {
    
    btnPedir.disabled   = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
});

btnNuevo.addEventListener('click',() => {
    btnNuevo.disabled = true;
   
    const NuevoJuego= () =>{
        puntosHTML[0,1].innerText = 0;
    
    
    }
});



















