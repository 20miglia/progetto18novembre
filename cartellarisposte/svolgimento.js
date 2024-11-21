//Esercizio 1: Scrivi un algoritmo per trovare il più grande tra due numeri interi.

let numero1 = 5
let numero2 = 10

let vincitore

if ( numero1 > numero2 ) {
    vincitore = numero1
} else {
    vincitore = numero2
}

console.log(vincitore)


//Esercizio 2: Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

let n1 = 2
if(n1 < 5) {
    console.log("Tiny")
} else if (n1 < 10) {
    console.log("Small")
} else if (n1 < 15) {
    console.log("Medium")
} else if (n1 < 20) {
    console.log("Large")
} else if (n1 >= 20) {
    console.log("Huge")
} else {
    console.log("Error")
}


/*ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
  */

  for (let i = 0; i <= 10; i++) {
    if ((i===3) || (i===8)) {
        continue;
    }
    console.log(i)
  }


  /* ESERCIZIO 4
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/


for (let m = 0; m <= 15; m++) {
    if (m % 2 === 0) {
        console.log(m + "numero pari")
    } else {
        console.log(m + "numero dispari")
    }
  }



  //ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/


let x = 5
let y = 3



if ((x===8) || (y===8) || (x+y === 8) || (x-y) || (y-x === 8)) {
console.log("Valore Corretto Trovato")
}



/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/


let totalShoppingCart = 70
let costoSpedizione = 10



if (totalShoppingCart > 50) {
  console.log(totalShoppingCart + " " + "Con Spedizione Gratuita")
} else {
  console.log(totalShoppingCart + costoSpedizione)
}






/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/



let totalShoppingCart = 70
let costoSpedizione = 10
let blackFriday = totalShoppingCart - (totalShoppingCart * 20) / 100



if (totalShoppingCart > 50) {
  console.log(blackFriday + " " + "Con Spedizione Gratuita")
} else {
  console.log(blackFriday + costoSpedizione)
}






/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/




let gender
let isMale = true

if(isMale) {
  console.log(gender = "male")
} else {
  console.log(gender = "female")
}


//Opeatore ternario
isMale ? (gender = "male") : (gender = "female")






/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/




for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      console.log("Fizz")
    } else if (i % 5 === 0) {
      console.log("Buzz")
    } else if ((i % 3 === 0) && (i % 5 === 0)) {
      console.log("FizzBuzz")
    }
  }





    