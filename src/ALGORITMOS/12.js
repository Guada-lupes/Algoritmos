//Escribir una función que elimine los elementos duplicados de un array.

let elementos = [2, 5, 7, 3, 2, 7, 1];

function eliminarduplicados(elementos) {

let mySet = new Set(elementos);


let elementosFiltrado = Array.from(mySet);

console.log(elementosFiltrado);
}
eliminarduplicados(elementos);