// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.

const nomeUtente = prompt("Inserisci il tuo nome");

//lista nomi invitati
let nomiInvitati = [
  "Ania",
  "Aria",
  "Asia",
  "Licia",
  "Lidia",
  "Lilia",
  "Livia"
];

//if per verificare se il nome utente inserito fa parte della lista
if (nomiInvitati.includes(nomeUtente)) {
    console.log(`${nomeUtente} puoi partecipare alla festa`);
} else {
    console.log(`${nomeUtente} non puoi partecipare alla festa`);
}

