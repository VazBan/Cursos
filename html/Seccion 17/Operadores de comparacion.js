//Operadores logicos

//IGUALDAD ESTRICTA
// Se utiliza "===" para la comparacion estricta  se le llama asi por ser muy espefica 
let resultado1 = 5 === 6 ;
console.log(resultado1)

//IGUALDAD NO ESTRICTA
/*Se utiliza "==" para comparacion menos estricta por ejemplo se puede comparar un number con un string y eso no afectara el resultado*/
let resultado2 = 5 == "5"
console.log(resultado2)

//COMPARADORES LOGICOS

// "<" Menor que
let a = 5 < 6    // 5 es MENOR QUE 6
console.log(a)

// "<" Menor que
let b = 5 < 4    // 5 es MENOR QUE 4
console.log(b)


// ">" MAYOR que
let c = 5 > 6   // 5 es MAYOR QUE 6
console.log(c)

// ">" MAYOR QUE
let d = 5 > 4   // 5 es MAYOR QUE 4
console.log(d)

// "<=" MENOR O IGUAL QUE
let e = 5 <= 5  // 5 es MENOR O IGUAL QUE 5
console.log(e)

// "<=" MENOR O IGUAL QUE
let f = 5 <= 6  // 5 es MENOR O IGUAL QUE 6
console.log(f)


// ">=" MAYOR O IGUA QUE
let g = 5 >= 5  // 5 es MAYOR O IGUAL QUE 5
console.log(g)

//">=" MAYOR O IGUAL QUE
let h = 5 >= 6  // 5 es MAYOR O IGUAL QUE 6
console.log(h)

//DESIGUALDAD ESTRICTA

// "!==" ESTRICTAMENTE DESIGUALES
let i = 5 !== 6  // 5 es ESTRICTAMENTE DESIGUAL QUE 6
console.log(i)

// "!=" DESIGUALDAD NO ESTRICTA
let j = 5 != "5"  // 5 es DIFERENTE DE "5"
console.log(j)
/*Para aclarar  en este caso se pueden comparar diferentes tipos de datos de tipo number o string, si los datos son similiares 
el operador de desigualdad analizara si son diferentes pero no estrictamente*/
