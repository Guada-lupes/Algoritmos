// Escribe una funcion que calcule los millisegundos que han pasado desde media noche 00:00:00 hasta la hora actual teniendo en
// cuenta que:
// – Hay 1000 millisegundos en un segundo
// – Podemos obtener la hora, minutos y segundos con la función "getTime"

function reloj() {
 // Fecha y hora actual
    const ahora = new Date();
    // console.log(ahora);
    
// Cogemos la const ahora y creamos una nueva fecha indicandole la hora, minutos y segundos
    const medianoche = new Date(ahora.getFullYear(), ahora.getMonth(), ahora.getDate(), 0, 0, 0, 0); 

    // console.log(medianoche);

// Al restar ambas fechas, nos devolverña la diferencia en milisegundos
    const diferencia = ahora - medianoche; 

    console.log(`Desde medianoche hasta ahora han pasado ${diferencia} milisegundos`);
}
reloj();