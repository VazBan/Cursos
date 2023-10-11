const time = document.getElementById('time');
const fecha = document.getElementById('fecha');

const mesesNombre = ["Enero","Febrero","Marzo",
                    "Abril","Mayo","Junio", 
                    "Julio","Agosto","Septiembre",
                    "Octubre","Noviembre","Diciembre",]

const intervalo = setInterval ( () => {
    const local = new Date ()

    let dia = local.getDate(),
        mes = local.getMonth(),
        año = local.getFullYear();

    time.innerHTML = local.toLocaleTimeString();
    fecha.innerHTML= `${dia} ${mesesNombre[mes]} ${año}`
})