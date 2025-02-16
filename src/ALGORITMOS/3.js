//Escribir una función que encuentre el número mayor en un array.



const misNumeros = [1, 50, 200, 30, 54, 500, 20, 78];

function buscarElMayor(array){

    const numeroMayor = Math.max(...array)
    
    console.log(`El mayor valor es ${numeroMayor}`);
    
}
//---------LLAMAR A LA FUNCIÓN-------
buscarElMayor(misNumeros)