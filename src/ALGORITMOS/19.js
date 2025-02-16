//Dado un año como parámetro (número), devuelve el número del siglo al que pertenece.

function convertirASiglo(ano) {
    let siglo;
    
    if (ano <= 100) {
        siglo = 1;
    } else if (ano >= 1000) {
        siglo = parseInt(ano.toString().slice(0, 2)) + 1;
    } else if (ano > 100 && ano < 1000) {
        siglo = parseInt(ano.toString().slice(0, 1)) + 1;
    }

    
    console.log(`${ano} pertenece al siglo ${siglo}`);
}


convertirASiglo(1900)