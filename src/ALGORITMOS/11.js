//Encontrar el segundo número más grande en un array.

const arrayNumeros = [5, 7, 234, 754, 342, 765, 1, 2432];

function encontrarSegundoMayor(arrayNumeros) {
  //hacemos una copia del array original
  let copiaArray = Array.from(arrayNumeros);
  //creamos una constante donde guardamos el indice del numero mayor
  const primero = copiaArray.indexOf(Math.max(...copiaArray));
  //eliminamos el numero mayor de la copia del array
  copiaArray.splice(primero, 1);

  //creamos una variable que recoge el valor de la funcion que buscara el numero mayor de la copia del array
  const segundoMayor = encontrarMayor(copiaArray);
  console.log(
    `El segundo número mayor del array: ${arrayNumeros}, es ${segundoMayor}`
  );
}

function encontrarMayor(copiaArray) {
  const mayor = Math.max(...copiaArray);
  return mayor;
}

encontrarSegundoMayor(arrayNumeros);

// versión optimizada
function elSegundoMayor(arrayNumeros) {
  const numerosOrdenados = arrayNumeros.sort((a, b) => {
    return a - b;
  });
  console.log(numerosOrdenados[numerosOrdenados.length - 2]);
}
elSegundoMayor(arrayNumeros);
