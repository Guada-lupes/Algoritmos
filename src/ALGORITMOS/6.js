//Crear un programa que calcule el número Fibonacci en la posición (n).

function fibonacci(posicion) {
  let fibonacci = [1, 1];

  for (let i = 0; i < posicion - 2; i++) {
    let nuevoNumero =
      fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];

    fibonacci.push(nuevoNumero);
  }
  return console.log(
    `El número fibonacci en la posición ${posicion} es ${
      fibonacci[posicion - 1]
    } siendo la secuencia ${fibonacci}`
  );
}
fibonacci(7);
