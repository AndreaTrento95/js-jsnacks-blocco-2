/* ESERCIZIO: Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while. */


// chiedo all'utente di inserire un numero per 5 volte
var arr = [];

for(var i = 0; i < 5; i++){
    var numero_utente = parseInt(prompt("Inserisci un numero"));
    arr.push(numero_utente);
}
console.log(arr);

