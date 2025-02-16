//Crear un algoritmo que invierta un string.



const palabra = "palabra";

function invertirPalabra(palabra) {
  if (typeof palabra === "string") {
    const palabraInvertida = palabra.split("").reverse().join("");

    console.log(`${palabra} invertida es: ${palabraInvertida}`);
  } else {
    console.log("Introduce una palabra");
  }
}
//---------LLAMAR A LA FUNCIÓN--------------------
invertirPalabra(palabra)
