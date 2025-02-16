//Escribir un algoritmo que determine si un año es bisiesto.

function bisiesto(ano) {

// Si el año no es divisible entre 4, devuelve "false"
if (ano % 4 !== 0) {
  console.log("No es bisiesto");
  return false;
  // Si el año es divisible entre 4 pero no entre 100, devuelve "true"
} else if (ano % 100 !== 0) {
  console.log("Es bisiesto");
  return true;
  // Si el año es divisible entre 100 pero no entre 400, devuelve "false"
} else if (ano % 400 !== 0) {
  console.log("No es bisiesto");
  return false;
  // Si el año cumple con todas las condiciones anteriores, devuelve "true"
} else {
  console.log("Es bisiesto");
  return true;
}
};

//--------LLAMAR A LA FUNCION
bisiesto(2024);

