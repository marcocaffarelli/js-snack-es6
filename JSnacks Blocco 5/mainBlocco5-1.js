// Crea 10 oggetti che rappresentano una zucchina,
// indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.
let zucchinaChiaraFaenza = {
    peso : 10,
    lunghezza : 0.9
};
let zucchinaFirenze = {
    peso : 12,
    lunghezza : 0.3
};
let zucchinaRieti = {
    peso : 7,
    lunghezza : 0.4
};
let zucchinaRoma = {
    peso : 18,
    lunghezza : 0.5
};
let zucchinaTerni = {
    peso : 3,
    lunghezza : 0.4
};
let zucchinaPerugia = {
    peso : 6,
    lunghezza : 0.2
};
let zucchinaParma = {
    peso : 7,
    lunghezza : 0.7
};
let zucchinaViterbo= {
    peso : 8,
    lunghezza : 0.1
};
let zucchinaTorino = {
    peso : 16,
    lunghezza : 0.8
};
let zucchinaBolzano = {
    peso : 11,
    lunghezza : 1
};


//creata un array dove andranno inserite le zucchine
let listaZucchine = [];

//inserisco nell'array le zucchine tramite push
listaZucchine.push(zucchinaChiaraFaenza, zucchinaFirenze, zucchinaRieti, zucchinaRoma, zucchinaTerni, zucchinaPerugia, zucchinaParma, zucchinaViterbo, zucchinaTorino, zucchinaBolzano);
//console.log(listaZucchine);

//let del peso totale che deve partire da zero
let pesoTotale = 0;

//ciclo for per sommare i pesi delle diverse zucchine
for(let i = 0; i < listaZucchine.length; i++){  
    pesoTotale = pesoTotale + listaZucchine[i].peso;
}
console.log(`Peso delle zucchine: ${pesoTotale}kg`);

