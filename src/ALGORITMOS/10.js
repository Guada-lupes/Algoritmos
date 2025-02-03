//Crear un programa que convierta grados Celsius a Fahrenheit y viceversa.

function conversor(tipo, grados) {
  const tipoLimpio = tipo.toLowerCase();

  if (!["c", "f"].includes(tipoLimpio)) {
    console.log("Error: El tipo debe ser 'C' (Celsius) o 'F' (Fahrenheit).");
    return;
  }

  if (typeof grados !== "number" || isNaN(grados)) {
    console.log("Error: Los grados deben ser un número.");
    return;
  }

  if (tipoLimpio === "c") {
    const resultadoCelsius = ((grados - 32) * 5) / 9;
    console.log(`${grados} grados Celsius son :${resultadoCelsius} Celsius`);
  }
  if (tipoLimpio === "f") {
    const resultadoFahrenheit = (grados * 9) / 5 + 32;
    console.log(
      `${grados} grados Celsius son :${resultadoFahrenheit} Fahrenheit`
    );
  }
}

//En caso de querer convertir Celsius a Fahrenheit colocar ("F", (n));
//En caso de querer convertir Fahrenheit a Celsius colocar ("C", (n));
conversor("c", 20);
