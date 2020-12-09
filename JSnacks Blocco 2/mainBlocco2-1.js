// Inserisci un numero, se è pari stampa il numero, se è dispari
// stampa il numero successivo

//variabile numero utente
let numeroUtente = Number(prompt("inserisci un numero"));

if (numeroUtente % 2 == 0) {
    console.log(`il numero inserito è ${numeroUtente}`);
} else {
    console.log(`${numeroUtente} il numero che hai inserito è dispari, perciò stampo ${numeroUtente + 1}`);
};
