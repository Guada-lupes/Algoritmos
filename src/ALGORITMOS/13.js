//Crear un algoritmo que sume todos los números de un array.

const numeros = [3, 5 ,6 ,21];

function sumarArray(numeros){
    const suma = numeros.reduce((acumulador, valorActual)=> acumulador+valorActual,0)

    console.log(suma);
    
}

//-------LLAMAR A LA FUNCION--------
sumarArray(numeros)

