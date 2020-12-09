// Il software deve chiedere per 5 volte all’utente di inserire un
// numero. Il programma stampa la somma di tutti i numeri
// inseriti. Esegui questo programma in due versioni, con il for
// e con il while.

let somma = 0;
//ciclo for
// for (let index = 0; index < 5; index++) {
//     const numeroUtente =  Number(prompt("Insert a number"));
//     somma += numeroUtente;
    
// };
// console.log(somma);

//ciclo while
let index = 0;
while (index < 5){
    const numeroUtente = Number(prompt("insert a number"));
    somma += numeroUtente;
    index++;
};

console.log(somma);