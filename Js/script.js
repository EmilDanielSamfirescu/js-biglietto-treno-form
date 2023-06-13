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





const myButton = document.getElementById(`genera`);

myButton.addEventListener('click',

function() {
    // Nome Utenete
    const nameInput = document.getElementById(`box-name`).value;
    let namePlace = document.getElementById('customer-name');
    namePlace.innerHTML = nameInput;

    console.log("nameInput", nameInput, typeof nameInput)


    // Km Viaggio
    const kmInput = parseInt(document.getElementById(`km`).value);

    console.log("kminput", kmInput, typeof kmInput)

    // Fascia età
    const ageInput = document.getElementById(`age`).value;

    console.log("ageInput", ageInput, typeof ageInput)

    // Tipologia Biglietto
    let ticketType = document.getElementById(`type-travel`);

    // Carrozza
    let numeroCarrozza = Math.floor((Math.random() * 20) + 1);
    document.getElementById("carrozza").innerHTML = numeroCarrozza;

    // Codice Biglietto
    let codiceCp = Math.floor((Math.random() * 99999) + 10000);
    document.getElementById("cp-code").innerHTML = codiceCp;

    // Biglietto
    const pricePerKm = 0.21;
    const travelPrice = kmInput * pricePerKm;
    const discountUnder18 = travelPrice - (travelPrice * 0.2);
    const discountOver64 = travelPrice - (travelPrice * 0.4);

    if (ageInput > 10 && ageInput < 30) {

        let finalPrice = document.getElementById(`ticket-price`);
        finalPrice.innerHTML = discountUnder18.toFixed(2) + " €";

        ticketType.innerHTML = "Biglietto Minorenni"

    } else if ( ageInput >= 30) {

        let finalPrice = document.getElementById(`ticket-price`);
        finalPrice.innerHTML = discountOver64.toFixed(2) + " €";

        ticketType.innerHTML = "Biglietto Ultrasessantenni"

    } else {

        let finalPrice = document.getElementById(`ticket-price`);
        finalPrice.innerHTML = travelPrice.toFixed(2) + " €";

        ticketType.innerHTML = "Biglietto Standard"

    }






}
)















































// const myButton = document.getElementById(`genera`);

// myButton.addEventListener(`click`,

// function() {
//     // Funzione Km
//     let kmInput = document.getElementById("km");
//     kmInput = parseInt(km.value);

//     const price = 0.21;
//     const pricePerKm = kmInput * price;
//     // console.log(pricePerKm)

//     // Funzione Età

//     let ageInput = document.getElementById(`age`).value;
//     ageInput = parseInt(age.value);
//     // console.log(ageInput);

//     // Nome
//     const inputName = document.getElementById(`box-name`).value;
//     const previousText = document.getElementById(`customer-name`).innerHTML = inputName;
//     console.log(inputName);

//     //Numero Carrozza
//     document.getElementById("carrozza").innerHTML =
//     Math.floor(Math.random() * 20) + 1;

//     // Codice CP
//     document.getElementById("cp-code").innerHTML =
//     Math.floor(Math.random() * 99999) + 10000;


//     // Discout
//     const discountUnder18 = pricePerKm - (pricePerKm * 0.2);
//     const discountOver64 = pricePerKm - (pricePerKm * 0.4);

//     // Offerta
//     const ticketTypeContainer = document.getElementById(`type-travel`);
//     const showTicket = ticketTypeContainer.innerHTML;

//     // Prezzo biglietto
//     const priceContainer = document.getElementById(`ticket-price`);
//     const finalPrice = priceContainer.innerHTML;


//     if ( ageInput > 10 && ageInput < 30 ){

//         priceContainer.innerHTML = discountUnder18.toFixed(2) + " " + "€";
//         // console.log(discountUnder18);

//         ticketTypeContainer.innerHTML = "Biglietto Minorenni";
        

//     } else if ( ageInput > 20) {

//         priceContainer.innerHTML = discountOver64.toFixed(2) + " " + "€";
//         // console.log(discountOver64);

//         ticketTypeContainer.innerHTML = "Biglietto Anziani";

//     } else {

//         priceContainer.innerHTML = pricePerKm.toFixed(2) + " " + "€";
//         // console.log(pricePerKm);

//         ticketTypeContainer.innerHTML = "Biglietto Standard";

//     }
    
    



// }

// )




