//////////////////////////////////// A ////////////////////////////////////

// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà:
// nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre
// saranno tutte settate a 0.

const squadre = [
    {
        nome : "Roma",
        puntiFatti : 0,
        falliSubiti : 0
    },
    {
        nome : "Juventus",
        puntiFatti : 0,
        falliSubiti : 0
    },
    {
        nome : "Bologna",
        puntiFatti : 0,
        falliSubiti : 0
    },
    {
        nome : "Inter",
        puntiFatti : 0,
        falliSubiti : 0
    },
    {
        nome : "Milan",
        puntiFatti : 0,
        falliSubiti : 0
    }
]
//console.log(squadre);

//////////////////////////////////// B ////////////////////////////////////

// Generare numeri random al posto degli 0 nelle proprietà:
// punti fatti e falli subiti

//ciclo forEach
squadre.forEach(function (item) {
    item.puntiFatti =  Math.floor(Math.random() * 100);
    item.falliSubiti =  Math.floor(Math.random() * 100);
});
console.log(squadre);