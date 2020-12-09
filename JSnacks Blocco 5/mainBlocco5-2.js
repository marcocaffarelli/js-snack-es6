// Scrivi una funzione che accetti una stringa come
// argomento e la ritorni girata (es. Ciao -> oaiC)

//funzione che inverte il testo

const ritornoGirato = (stringa) => stringa.split("").reverse().join("");  
console.log(ritornoGirato("ciao"))