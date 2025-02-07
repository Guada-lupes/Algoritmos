//Escribir una función que convierta un número romano a número arábigo.

function arabicoRomano(numero) {
  const equivalencias = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  console.log(equivalencias);

  const numeroVerificacion = parseInt(numero);
  console.log(typeof numeroVerificacion);

  if (!isNaN(numeroVerificacion)) {
    //conversion a romano
    console.log("es numero");
  }
  if (isNaN(numeroVerificacion)) {
    //conversion a arabico
    const numeroToArray = numero.toUpperCase().split("");
    let valoresConvertidos = [];
    let valoresAsignados = []
    console.log("es string");
    numeroToArray.forEach((elemento) => {

      if (equivalencias.hasOwnProperty(elemento)) {
        console.log(equivalencias[elemento]);
        valoresConvertidos.push(equivalencias[elemento])
      }})

      for (let i = 0; i <valoresConvertidos.length; i++){
        console.log(valoresConvertidos);
        console.log(i);
        
        if(valoresConvertidos[i]<valoresConvertidos[i+1]){
            console.log(-valoresConvertidos[i]);
            
            valoresAsignados.push(-valoresConvertidos[i])
        }else{
            valoresAsignados.push(valoresConvertidos[i])
            console.log(valoresConvertidos[i]);
        }
        console.log(valoresAsignados);
      }
    const resultado = valoresAsignados.reduce((acumulador, valorActual)=> acumulador+valorActual, 0)
    
    console.log(resultado);
    
  }
}

arabicoRomano("ivx");
