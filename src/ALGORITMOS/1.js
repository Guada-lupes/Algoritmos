//Escribir una función que determine si un número es par o impar.

function numeroPar(numero) {
  if (typeof numero != "number"){
    console.log("No es un número"); return}
    
   if(!Number.isInteger(numero)){
    console.log("Introduce un número entero"); return
   } 
   if(numero % 2 === 0) {
    console.log("Es un número par"); return
  }
  else{
    console.log("No es un número par");
    
  }
}

//--------------LLAMAR A LA FUNCIÓN--------------------
numeroPar(5);
//Faltaría verificar que el número introducido con coma también lo entiende como decimal