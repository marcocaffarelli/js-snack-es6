// Scrivi una funzione che fonda due array (con lo stesso
//     numero di elementi) prendendo alternativamente gli
//     elementi da uno e dall’altro
//     es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

//array di numeri e lettere
let listaLettere = ["a","b","c"];
let listaNumeri = [1,2,3];
//array mista in cui fondere gli elementi delle prime due liste
let listaMista = [];

const unione = (lista1, lista2, lista3) => {
    for (let i = 0; i < lista1.length; i++) {
        lista3.push(lista1[i], lista2[i]);      
    };
    return lista3
};  

console.log(unione(listaLettere, listaNumeri, listaMista));