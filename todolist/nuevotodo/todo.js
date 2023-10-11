const lista = document.getElementById('lista')
const input = document.getElementById('input')

//Funcion para crear elemento
function addTask(){
    //revisa que el input no este vacio
    if(input.value === ''){
        alert("Agrega una nueva tarea");
    }else{
        //crea la etiqueta <li></li>
        let li = document.createElement("li");
        //le agregar el valor del input a la etiqueta <li></li>
        li.innerHTML = input.value;
        //agrega el <li> + "valor del input" </li> al <ul></ul>
        lista.appendChild(li);
        //Se crea el elemento span
        let span = document.createElement("span")
        //Se agrega el caracter "x" que es "\u00d7" al span para poder borrar el elemento
        span.innerHTML = "\u00d7"
        //Se agrega a un lado del </li> el elemento <span>x</span >
        li.appendChild(span)
    }
    //Se limpia el valor del input para volver a utilizarlo
    input.value = "";
    //se guarda en el local storage
    saveData()
}

//funcion para borrar elemento
lista.addEventListener("click",function(e){
    //si damos "click" en el elemento <span>x</span>
    if(e.target.tagName === "SPAN"){
        //removemos el elemento <li> del padre <ul>
        e.target.parentElement.remove()
        //se guarda en el local storage
        saveData()
    }
},false);

function saveData(){
    localStorage.setItem("data",lista.innerHTML)
}