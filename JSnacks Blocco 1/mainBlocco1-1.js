// L’utente inserisce due numeri in successione, con due
// prompt. Il software stampa il maggiore.

//variabile numero uno
let numeroUno = Number(prompt("Inserisci un numero"));
//variabile numero due
let numeroDue = Number(prompt("Inserisci un secondo numero"));

//console.log(numeroUno, numeroDue);

//if per stampare il numero maggiore
if (numeroUno  > numeroDue) {
    console.log(`Il numero maggiore è il primo numero inserito cioè il numero ${numeroUno}`);
} else if (numeroUno  < numeroDue) {
    console.log(`Il numero maggiore è il secondo numero inserito cioè il numero ${numeroDue}`);
} else {
    console.log("I due numeri inseriti sono uguali");
}

