// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

var array = [];
var arrayTentativi = [];

for (var i = 0; i < 5; i++){
  numRandom = Math.floor((Math.random() *100) + 1);
  array.push(numRandom);
}

console.log(array);

alert("Memorize these numbers:" + " " + array);

setTimeout(tentativi, 3000);

function tentativi(){
  for (var i = 0; i < 5; i++){
    var numUtente = parseInt(prompt("Inserisci un numero"));
    arrayTentativi.push(numUtente);
  }
}

console.log(arrayTentativi);

if 
}



























// sjhbdxwhbdw
