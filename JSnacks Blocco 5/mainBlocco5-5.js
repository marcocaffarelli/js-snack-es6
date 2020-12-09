// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al
// massimo quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che
// hanno la posizione compresa tra “a” e “b”

var piccolo = 1; //a
var grande = 4; //b
var listaNumeri = [2, 5, 7, 9, 15];

const lista = (a, b, array) => {
    array.push(b)
    array.unshift(a)
    return array.slice(a, b);
}
console.log(lista(piccolo, grande, listaNumeri));
