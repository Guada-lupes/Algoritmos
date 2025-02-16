// Ordenar un array de números en orden ascendente (sin usar sort).

let arrayNumeros = [34, 63, 345, 78, 13, 54, 6345];
const longitudArray = arrayNumeros.length

function ordenarSinSort(arrayNumeros) {
  let ordenados = [];
  for (let i = 0; i < longitudArray; i++) {

    //obtenemos el índice del número menor
    const indiceDelNumero = arrayNumeros.indexOf(Math.min(...arrayNumeros));
    //obtenemos el valor del número menor
    const numeroMenor = Math.min(...arrayNumeros);
    // console.log(`El número menor es ${numeroMenor}`);
    //agregamos el menor a un nuevo array
    ordenados.push(numeroMenor);
    //Eliminamos el menor del array madre
    arrayNumeros.splice(indiceDelNumero, 1);
    // console.log(`Array madre con la eliminación de ${numeroMenor}: ${arrayNumeros}`);
    // console.log(`Array de numeros ordenados con el nuevo número ${numeroMenor}: ${ordenados}`);
  }
  return console.log(ordenados);
}

//--------------------LLAMAR A LA FUNCIÓN-----------------------------
ordenarSinSort(arrayNumeros);
