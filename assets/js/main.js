// costo del biglietto
const priceKm = 0.21;

// richiamo il bottone dall'html
const btnGenEl = document.querySelector('button');

// assegno una funzione al bottone
btnGenEl.addEventListener("click", function () {
    // chiedo il nome all'utente
    const userName = document.getElementById('name').value;
    document.getElementById("p_name").innerHTML = userName;
    //console.log(`Nome passeggero: ${userName}`);

    // chiedo l'età all'utente
    const userAge = document.getElementById('age').value;
    //console.log(`Età passeggero: ${userAge}`);

    // chiedo i chilometri da percorrere all'utente
    const userKm = document.getElementById('km').value;
    //console.log(`Chilometri da percorrere: ${userKm}`);

    // prezzo totale del biglietto
    let ticketPrice = priceKm * userKm;

    // calcolo il valore del biglietto
    if (userAge >= 65) {
        let discount = ((ticketPrice * 40) / 100);
        ticketPrice = ticketPrice - discount;
        document.getElementById("p_sale").innerHTML = 'Sconto Over 65';
        document.getElementById("p_cost").innerHTML = `${ticketPrice.toFixed(2)} €`;
        //console.log(`Il prezzo totale del biglietto è: ${ticketPrice.toFixed(2)} €`);
    } else if (userAge < 18) {
        let discount = ((ticketPrice * 20) / 100);
        ticketPrice = ticketPrice - discount;
        document.getElementById("p_sale").innerHTML = 'Sconto Minorenni';
        document.getElementById("p_cost").innerHTML = `${ticketPrice.toFixed(2)} €`;
        //console.log(`Il prezzo totale del biglietto è: ${ticketPrice.toFixed(2)} €`);
    } else {
        document.getElementById("p_sale").innerHTML = 'Nessuno sconto';
        document.getElementById("p_cost").innerHTML = `${ticketPrice.toFixed(2)} €`;
        //console.log(`Il prezzo totale del biglietto è: ${ticketPrice.toFixed(2)} €`);
    }
})