// L’utente inserisce due parole in successione, con due
// prompt. Il software stampa prima la parola più corta, poi la
// parola più lunga.

//variabile prima parola
let primaParola = prompt("Inserisci una parola");
//variabile seconda parola
let secondaParola = prompt("Inserisci una parola");

//if per stampare prima la parola più corta e dopo la più lunga
if (primaParola.length > secondaParola.length) {
    console.log(`${secondaParola} ${primaParola}`);
} else if (primaParola.length  < secondaParola.length) {
    console.log(`${primaParola} ${secondaParola}`);
} else {
    console.log(`Le due parole hanno la stessa lunghezza`);
};
