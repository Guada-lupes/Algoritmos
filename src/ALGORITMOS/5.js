//Determinar si una palabra es un palíndromo.


function esPalindromo(palabra){
    const palabraInversa = palabra.split("").reverse().join("").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if(palabra.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === palabraInversa){
        console.log(`${palabra} es palíndromo`);
        return
    }
    console.log(`${palabra} no es palíndromo`);
    
}

esPalindromo("moóM")