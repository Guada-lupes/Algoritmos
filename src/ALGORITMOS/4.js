//Crear un algoritmo que devuelva el factorial de un número.


function conseguirFactorial(numero) {
    let factorial = 1;
    for (let i =numero; i>1; --i){

        factorial *=i;
    }
    return console.log(factorial);
     factorial
} 

conseguirFactorial(3)
