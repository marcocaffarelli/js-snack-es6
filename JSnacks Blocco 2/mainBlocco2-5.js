// Scrivi una funzione per stabilire se un numero è primo.
// Chiedi un numero all’utente e utilizza la funzione per
// comunicargli se il numero inserito è primo oppure no.

// Arrow function per verificare se un numero è primo
const ctrlNumeroPrimo = numero => {
    for(let index = 2; index < numero; index++) {
        if(numero % index === 0) return false;
    };
    return numero !== 1;      
};

//variabile numero utente
const numeroUtente = Number(prompt("inserisci un numero"));
console.log(ctrlNumeroPrimo(numeroUtente));

if (ctrlNumeroPrimo(numeroUtente) == true) {
    console.log(`${numeroUtente} è un numero primo`);
}else{
    console.log(`${numeroUtente} non è un numero primo`);
};