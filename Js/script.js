// Descrizione:

// Scrivere un programma che chieda all'utente:

// - Il numero di chilometri da percorrere
// - Età del passeggero

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:

// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.

// MILESTONE 1:

// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch'essa da scrivere in console.

// MILESTONE 2:

// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l'utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.

// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// Nota:

// Se non vi sentite particolarmente creativi, questa potrebbe essere un'implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.


// Dati da chiedere

// Numero di Km che si vuole percorrere
// Età del passeggero
//  - se minorenne -> sconto del 20%
//  - se ha più di 64 anni -> sconto del 40%
//  - altrimenti -> tariffa piena sapendo che il costo è di 0.21€ al km

// const myButton = document.getElementById(`acquista`);


// myButton.addEventListener("click",
// function() {
//     const kmField = document.getElementById('km');
//     let km = kmField.value;
//     km = parseInt(km);
//     const price = 0.21;
//     const pricePerKm = km * price;
//     console.log(pricePerKm)

// }
// );

const myButton = document.getElementById(`acquista`);

myButton.addEventListener(`click`,
function() {
    // Funzione Km
    let kmInput = document.getElementById("km");
    kmInput = parseInt(km.value);

    const price = 0.21;
    const pricePerKm = kmInput * price;
    // console.log(pricePerKm)

    // Funzione Età

    let ageInput = document.getElementById(`age`);
    ageInput = parseInt(age.value);
    // console.log(ageInput);

    // Discout

    const discountUnder18 = pricePerKm - (pricePerKm * 0.2);
    const discountOver64 = pricePerKm - (pricePerKm * 0.4);

    if (isNaN(kmInput) || isNaN(ageInput)) {

        alert("Inserire numeri");

    } else if ( ageInput < 18 ){

        console.log(discountUnder18);

    } else if ( ageInput > 64) {

        console.log(discountOver64);

    } else {

        console.log(pricePerKm);

    }
    

    
}

)




