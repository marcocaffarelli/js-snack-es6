// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
// un numero, se è dispari inseriscilo nell’array.

//array vuoto
let numeriDispari = [];

//ciclo for per chiedere all'utente di inserire 6 volte un numero
for (let index = 0; index < 6; index++) {
    const numeroUtente = Number(prompt("inserisci un numero"));
    // se il numero è dispari inseriscilo nell' array numeriDispari
    if (numeroUtente % 2 !=0) {
        numeriDispari.push(numeroUtente)
    };
    
};
console.log(numeriDispari);

