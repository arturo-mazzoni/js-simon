// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

var array = [];

while (array.length < 5){
  numRandom = Math.floor((Math.random() *100) + 1);

  if (array.includes(numRandom) == false){
    array.push(numRandom);
  }
}

console.log(array);

alert("Memorize these numbers:" + " " + array);

setTimeout(tentativi, 3000);


// FUNCTIONS*****
function tentativi(){

  var arrayTentativi = [];

  while (arrayTentativi.length < 5){
    var numUtente = parseInt(prompt("Inserisci un numero"));

    // controllo che in num non sia gia stato digitato
    if (arrayTentativi.includes(numUtente) == false){
      arrayTentativi.push(numUtente);
    }
    // controllo se il numero è presente in array

    if (array.includes(numUtente) == true){
      
    }
  }
  console.log(arrayTentativi);

  return arrayTentativi;
}







// Creo un array vuoto,
// genero dei numeri rando e li assegno all'array,
// creo un alert dove appare il contenuto dell'array,
// creo una funzione che chiede per cinque volte all'utente un numero,
// richamo la funzione con un ritardo di un tot di secondi,
// creo un altro array dove inserisco i numeri dell'utente,
// confronto i due array per vedere quanti e quali numeri sono contenuti in entrambi.
