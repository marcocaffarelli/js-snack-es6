// Creare un oggetto che rappresenti un triangolo rettangolo,
// con le seguenti proprietà: base e altezza.
// Calcolare perimetro e area.
// (ripassiamo il Teorema di Pitagora ;D )

const triangolo = {
    base : 18,
    altezza : 10
};
console.log(triangolo);

//calcolo dell'area
const area = (triangolo.base * triangolo.altezza)/2 
console.log(`${area} questo è il valore dell'area del triangolo`);

//calcolo dell'ipotenusa 
const ipotenusa = Math.sqrt((triangolo.base*triangolo.base)+(triangolo.altezza*triangolo.altezza));
console.log(`${ipotenusa} questo è il valore dell'ipotenusa del triangolo`);
//calcolo dell'ipotenusa con Math.pow
// var ipotenusa = Math.sqrt(Math.pow(triangolo.base, 2) + Math.pow(triangolo.altezza, 2));
// console.log(ipotenusa);

//calcolo del perimetro
const perimetro = (triangolo.base + triangolo.altezza + ipotenusa).toFixed(2);
console.log(`${perimetro} questo è il valore del perimetro del triangolo`);
