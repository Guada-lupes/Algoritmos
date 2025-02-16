//Escribir una función que convierta un número romano a número arábigo.

const equivalenciasRomano = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};


//------LLAMAR A LA FUNCION -----------
conversor("liv");

//Verificamos que el valor ingresado es un valor correcto a convertir
function conversor(numero) {
  //pasamos el string a numero 
  const numeroVerificacion = parseInt(numero);
  const verificadorTresLetras = ["V", "L", "D"];

  //Si no es un Nan, es porque es número
  if (!isNaN(numeroVerificacion)) {
    console.log("Introduce un número romano");
    return;
  }

  //Si es NaN es un string
  if (isNaN(numeroVerificacion)) {
    // console.log("Es un string");
    //lo convertimos en mayúsuclas y en array
    const numeroToArray = numero.toUpperCase().split("");
    
    //-----------comprobamos que no existan caracteres incorrectos----------------
    //comprobamos que no haya más de 3 caracteres iguales seguidos
    if (numeroToArray.length > 3) {
      for (let i = 0; i < numeroToArray.length-1; i++)
        if (
          numeroToArray[i] === numeroToArray[i + 1] &&
          numeroToArray[i] === numeroToArray[i + 2] &&
          numeroToArray[i] === numeroToArray[i + 3]
        ) {
          console.log("Lo símbolos no pueden repetirse más de 3 veces");
          return;
        }
    }
    //Los símbolos V, L y D no se pueden repetir
    for (let i = 0; i < verificadorTresLetras.length-1; i++) {
      //comprobamos si alguna de las letras del array verificador existe
      if (numeroToArray.some((letra) => letra === verificadorTresLetras[i])) {
        //si existen las filtramos en una constante
        const contador = numeroToArray.filter(
          (letra) => letra === verificadorTresLetras[i]
        );
        //comprobamos que el array no sea mayor a 1
        if (contador.length > 1) {
          console.log("Los símbolos V, L y D no pueden repetirse");
          return;
        }
      }
    }
    //si todo va bien, ejecutamos la funcion conversora
    deRomanoAArabigo(numeroToArray);
  }
}
//Convertimos romano a arabigo
function deRomanoAArabigo(numeroToArray) {
  let valoresConvertidos = [];
  let valoresAsignados = [];

  for (let i = 0; i < numeroToArray.length; i++) {

        arrayEquivalencias(numeroToArray[i]);
  }

  //Buscamos equivalencias entre los valores introducidos y las claves del objeto equivalencias. Introducimos los valores de las equivalencias en el array valoresconvertidos
  function arrayEquivalencias(letra) {
    if (equivalenciasRomano.hasOwnProperty(letra)) {
      // console.log(equivalenciasRomano[letra]);
      valoresConvertidos.push(equivalenciasRomano[letra]);
    }
  }

  for (let i = 0; i < valoresConvertidos.length; i++) {

    // console.log(valoresConvertidos);
    // console.log(valoresConvertidos.length);  
    // console.log(`valor actual ${valoresConvertidos[i]}`);

    //si el valor es menor que su continuo, pasa restando
    if (valoresConvertidos[i] < valoresConvertidos[i + 1]) {
      // console.log(valoresConvertidos[i]);
      valoresAsignados.push(-valoresConvertidos[i]);
    }
    //si el valor es mayor o igual que continuo, pasa sumando
    if (valoresConvertidos[i] >= valoresConvertidos[i + 1]) {
      // console.log(valoresConvertidos[i]);
      valoresAsignados.push(valoresConvertidos[i]);
    }
    //si el valor es menor que que su anterior, pasa sumando
    // if (valoresConvertidos[i] < valoresConvertidos[i - 1]) {
    //   console.log("hola3");
      
    //   valoresAsignados.push(valoresConvertidos[i]);
    // }
        
    if(valoresConvertidos[i+1] === undefined){
      valoresAsignados.push(valoresConvertidos[i]);
    }
  }
  // console.log(valoresAsignados);
  //sumamos todos lo valores para comprobar el resultado de la operación
  const resultado = valoresAsignados.reduce(
    (acumulador, valorActual) => acumulador + valorActual,
    0
  );

  console.log(resultado);
  return resultado;
}

