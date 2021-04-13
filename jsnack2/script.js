// ESERCIZIO: Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

// Chiedo all'utente di inserire un numero
var num_utente = parseInt(prompt("Inserisci un numero"));

if(num_utente % 2 === 0){
    console.log(num_utente);
}else{
    console.log(num_utente + 1);
}
