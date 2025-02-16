//Crear un algoritmo que devuelva el factorial de un número.

conseguirFactorial(3)

function conseguirFactorial(numero) {
    let factorial = 1;
    for (let i =numero; i>1; --i){

        factorial *=i;
    }
    return console.log(factorial);
} 

