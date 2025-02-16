// Crear una función que cuente cuántas veces aparece un carácter en un string.

function contarCaracteres(palabra, caracter) {

    if (caracter.length > 1) {
        console.log("introduce sólo 1 caracter");
        return;
      }
  const palabraToArray = palabra
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u036f]/g, "")
    .split("");

  const caracterLimpio = caracter
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u036f]/g, "");
  let contadorCaracter = 0;

  palabraToArray.forEach((elemento) => {
    
    if (elemento == caracterLimpio) {
      ++contadorCaracter;
    }
  });
  console.log(`${palabra} contiene: ${contadorCaracter} veces ${caracter}`);
}

//--------LLAMAR A LA FUNCION------------
//Indica primero la palabra y luego la letra a buscar
contarCaracteres("palabrap", "A");
