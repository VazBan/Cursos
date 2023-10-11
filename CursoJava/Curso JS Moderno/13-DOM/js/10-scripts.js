const enlace = document.createElement('a');

//Agregándole el texto
enlace.textContent = 'Nuevo enlace';

//Añadiendo href
enlace.href = '/nuevo-enlace';

enlace.target = "blank";
console.log(enlace);

enlace.target = "_blank";



enlace.classList.add('algunaClase')
//Seleccionar la navegación
const navegacion = document.querySelector('.navegacion');

navegacion.insertBefore(enlace,navegacion.children[1]);


//Crear un car de manera dinamica

const parrafo1 = document.createElement('p');
parrafo1.textContent ='Concierto';
parrafo1.classList.add('categoria', 'concierto')

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'concierto de rock';
parrafo2.classList.add('titulo');


const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

//crear div con la clase de info
const info = document.createElement('div');
info.classList.add('info')
console.log(info);