const contenedor = document.querySelector('.container')

const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
.then(respuesta => respuesta.json())
.then(data => {
    data.forEach(usuario => {
        const p = document.createElement('p')
        p.innerHTML = usuario.name
        contenedor.appendChild(p)
    });
})