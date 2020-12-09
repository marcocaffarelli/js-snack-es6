// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

//array più lungo
let lista1 = [10, 22, 73, 74, 57, 63 ,76, 90, 19, 77, 94, 44];
console.log(lista1);
//array più corto
let lista2 = [16, 36, 58, 75, 70];
console.log(lista2);
//variabile della differenza tra i 2 array
const differenza = (lista1.length - lista2.length);
//ciclo for per sommare numeri casuali all'array più corto fino a raggiunger l'array più lungo
for (let i = 0 ; i < differenza; i++){
    const elemento =  Math.floor(Math.random() * 101);
    lista2.push(elemento);
};
console.log(lista2);