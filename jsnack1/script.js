/* ESERCIZIO: Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while. */



// ---------- FOR -------------
// chiedo all'utente di inserire un numero per 5 volte, il risulatto lo metto dentro un array
var arr = [];

for(var i = 0; i < 5; i++){
    var numero_utente = parseInt(prompt("Inserisci un numero"));
    arr.push(numero_utente);
}

// creo un ciclo per prendere i singoli elementi degli array e sommarli
var somma = 0;

for(var c = 0; c < arr.length; c++){
    elemento = arr[c];
    somma += elemento ;
}

// output
console.log(somma);



// ---------- WHILE ---------
var arr = [];

var counter = 0;
while(counter < 5){
    var numero_utente = parseInt(prompt("Inserisci un numero"));
    arr.push(numero_utente);
    counter++ ;
}


var somma = 0;
var i = 0;
while(i < arr.length){
    var elemento = arr[i];
    somma += elemento;
    i++ ;
}
console.log(somma);



