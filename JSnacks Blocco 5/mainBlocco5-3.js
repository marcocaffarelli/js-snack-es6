// Crea 10 oggetti che rappresentano una zucchina.

let zucchinaChiaraFaenza = {
    peso : 10,
    lunghezza : 16
};
let zucchinaFirenze = {
    peso : 12,
    lunghezza : 11
};
let zucchinaRieti = {
    peso : 7,
    lunghezza : 8
};
let zucchinaRoma = {
    peso : 18,
    lunghezza : 13
};
let zucchinaTerni = {
    peso : 3,
    lunghezza : 20
};
let zucchinaPerugia = {
    peso : 6,
    lunghezza : 17
};
let zucchinaParma = {
    peso : 7,
    lunghezza : 23
};
let zucchinaViterbo= {
    peso : 8,
    lunghezza : 5
};
let zucchinaTorino = {
    peso : 16,
    lunghezza : 10
};
let zucchinaBolzano = {
    peso : 11,
    lunghezza : 1
};

// Dividi in due array separati le zucchine che misurano
// meno o più di 15cm.

let listaZucchineCorte = [];
let listaZucchineLunghe = [];
//aggiunte le zucchine corte alla listaZucchineCorte
listaZucchineCorte.push(zucchinaFirenze, zucchinaRieti, zucchinaRoma, zucchinaViterbo, zucchinaTorino, zucchinaBolzano);
//console.log(listaZucchineCorte);
//aggiunte le zucchine lunghe alla listaZucchineLunghe
listaZucchineLunghe.push(zucchinaChiaraFaenza, zucchinaTerni, zucchinaPerugia, zucchinaParma);
//console.log(listaZucchineLunghe);

//var del peso zucchine corte che deve partire da zero
let pesoCorte = 0;
//var del peso zucchine lunghe che deve partire da zero
let pesoLunghe = 0;

//Creata un arrow function per sommare i pesi
const somma = (peso, lista) => {
    for(let i = 0; i < lista.length; i++){  
        peso = peso + lista[i].peso;
    }
    return peso
};  

console.log(`La somma dei pesi delle zucchine sotto i 15cm è uguale a: ${somma(pesoCorte, listaZucchineCorte)}kg`);
console.log(`La somma dei pesi delle zucchine sopra i 15cm è uguale a: ${somma(pesoLunghe, listaZucchineLunghe)}kg`);

