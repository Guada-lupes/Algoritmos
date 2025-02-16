//Crear un algoritmo que valide si un string tiene paréntesis balanceados.

parentesisBalanceados("(guada))")

function parentesisBalanceados(string){
    let apertura = ["("];
    let cierre = [")"];
    let aperturaCierre = []
    let stringToArray = string.split("");

    console.log(stringToArray.includes(apertura[0])? true : false);
    //necesito comprobar que el primer parentesis que aparece es de apertura
    let comprobarApertura = stringToArray.findIndex((elemento => elemento === apertura[0]));
    aperturaCierre.push(comprobarApertura);
    let compCierre = stringToArray.findIndex((elemento => elemento === cierre[0]));
    aperturaCierre.push(compCierre)

//Cuento la cantidad de paréntesis de apertura y cierre
    if(aperturaCierre[0]>aperturaCierre[1]){
        console.log("Parentesis no balanceados");
    }
        let sumarApertura = [];   
        let sumarCierre = [];   

    for(let i= 0; i< stringToArray.length; i++){
        stringToArray[i].includes(apertura)? sumarApertura.push(stringToArray[i]) : 0;
        stringToArray[i].includes(cierre)? sumarCierre.push(stringToArray[i]) : 0;
    }
    
    if(sumarApertura.length === sumarCierre.length){
        console.log("Paréntesis balanceados");            
    }
    else{
        console.log("Paréntesis no balanceados");
        
    }
    console.log(sumarApertura, sumarCierre);

    
}
