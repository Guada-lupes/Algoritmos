//Crear un programa que devuelva los números primos hasta el número (n).
function numerosPrimos(numero){

    //Creamos un array para guardar los restos
        let arrayRestos = [];

    for(let i = 1; i<=numero; i++){
        //Dividimos el numero por todos los números más pequeños hasta el 1
        const resto = numero% i;
//Si el resto es igual a 0 lo añadimos al array
        if(resto === 0){
            arrayRestos.push(resto);   
        }
    }
//Si el array es mayor de 2, significa que el numero es divisible por más de dos numeros, lo que lo hace no primo
    if(arrayRestos.length === 2){
        console.log(`${numero } es un número primo`);
    }
    else{
        console.log(`${numero } NO es un número primo`);
        
    }
}
numerosPrimos(25);