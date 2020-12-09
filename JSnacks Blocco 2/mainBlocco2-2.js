// Generatore di “nomi cognomi” casuali: prendendo una lista
// di nomi e una lista di cognomi, Gatsby vuole generare una
// falsa lista di invitati.

//variabile nomi
let nomi = ["Francesco", "Daniele", "Alessandro", "Lorenzo" ];
//variabile cognomi
let cognomi = ["Totti", "De rossi", "Florenzi", "Pellegrini"];
//variabile lista vuota
const listaFalsa = [];

//ciclo for per inserire nell'array un nome e un cognome casuali per 8 volte 
for (let index = 0; index < 8; index++) {
    const nomeCasuale = Math.floor(Math.random()*((nomi.length - 1) - 0 + 1) + 0);
    const cognomeCasuale = Math.floor(Math.random()*((cognomi.length - 1) - 0 + 1) + 0);

    const nome = `${nomi[nomeCasuale]} ${cognomi[cognomeCasuale]}`;
    listaFalsa.push(nome)
};

console.log(listaFalsa);
