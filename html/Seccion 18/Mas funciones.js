
/* "return" se utiliza para poder regresar el valor obtenido dentro de la funcion ya que si no se utiliza "return"
el resultado que se obtenga de nuestra funcion no se podra almacenar ni utilizar y solo se podra obtener dentro de la funcion,
es por ello que se utiliza "return" para asi poder regresar el valor obtenido dentro de la funcion y asi poder asignarlo dentro de una
variable la cual guardara el resultado de esta y se podra utilizar las veces que sean necesarias.*/

function suma (a,b){

    /* aqui returno no imprimira ni almacenara el resultado de (a+b) sino que el resultado de esto lo regresara para posteriormente si es que
    se desea se puede guardar o imprimir*/
    return(a + b)
   
}
/* Aqui es donde lo obtenido en "return" se almacena dentro de la varible "resultado" */

let resultado = suma (2,3)
let resultado2 = suma (8,3)
let resultado3 = suma (12,15)

let resultado4 = suma (resultado,resultado2)
let resultado5 = suma (resultado3,resultado4)

 /*aqui se imprimer lo optenido en "return" despues de asignar lo obtenido en "resultado"*/

console.log (resultado) //5
console.log (resultado2) //11
console.log (resultado3) //27
console.log (resultado4) // esto es la suma entre el resultado "5" mas resultado2 "11"
console.log (resultado5) // esto es la suma entre el resultado3 "27" mas resultado4 "16"
