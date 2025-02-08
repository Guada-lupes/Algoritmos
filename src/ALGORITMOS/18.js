//Crear un programa que transforme una frase en "notación hacker" (leet speak).
const abecedario = {
    a: 4, b:8, c:"(", d:"|)", e: 3, f:"|=", g:6, h:"#", i: 1, j:"_|", k:"|<", l:"|", m: "^^", n: "|\\|", o: "", p:"|°", q:"0_", r: "|2",s: 5, t:7, u:"|_|", v: "\\/", w: "\\|/", x: "><", y:"`/", z:2   
};

//-------------------Algo raro pasa con la o, en la consola se duplica, sale el 0, cero pero también sale la o. Es rarísimo. Si quito el cero, la o sigue saliendo. Por eso lo deje en string vacio

console.log(Object.values(abecedario));

function traductor(frase){

    //convertiria la frase a un array, crearia un nuevo array con las correspondencias y lo uniria
const fraseToArray = frase.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split("");
console.log(fraseToArray);

const fraseTraducida = []

fraseToArray.forEach((letra)=>{
    letra === abecedario[letra];
    console.log(abecedario[letra]);
    if(!abecedario[letra]){
        fraseTraducida.push(letra);
    }
    fraseTraducida.push(abecedario[letra]);
})
console.log(fraseTraducida.join(""));

}
traductor("como como pollo")