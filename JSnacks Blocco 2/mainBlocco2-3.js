// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

//variabili
const listaNumeri = [1, 4, 2, 15, 120, 17, 3];
let somma = 0;

//ciclo for per sommare tutti gli elementi in posizione dispari
for (let index = 1; index < listaNumeri.length; index +=2) {
    somma += listaNumeri[index];
    
}
console.log(somma); 
