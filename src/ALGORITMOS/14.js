//Escribir un programa que verifique si dos strings son anagramas.

function sonAnagramas(palabra1, palabra2){
    
    const palabraLimpia = (palabra)=>
        palabra.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split("");
    
    const palabra1Limpia = palabraLimpia(palabra1)
    const palabra2Limpia = palabraLimpia(palabra2)

    // const palabra1Limpia = palabra1.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split("");
    // const palabra2Limpia = palabra2.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split("");
    // console.log(palabra1Limpia, palabra2Limpia);
    
    const palabra1OrdenadaAstring = palabra1Limpia.sort((a, b) => a.localeCompare(b)).join("");
    console.log(palabra1OrdenadaAstring);
    
    const palabra2OrdenadaAstring = palabra2Limpia.sort((a, b) => a.localeCompare(b)).join("");
    console.log(palabra2OrdenadaAstring);
    

    if(palabra1OrdenadaAstring === palabra2OrdenadaAstring){
        console.log("Son anagramas");
    }
    else{console.log("No son anagramas");
    
    }}
sonAnagramas("coche", "checo");