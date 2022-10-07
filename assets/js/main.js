// richiamo il bottone dall'html
const btnGenEl = document.querySelector('button');

// assegno una funzione al bottone
btnGenEl.addEventListener("click", function(){
    // chiedo il nome all'utente
    const userName = document.getElementById('name').value;
    console.log(`Nome passeggero:  ${userName}`);

    // chiedo l'età all'utente
    const userAge = document.getElementById('age').value;
    console.log(`Età passeggero:  ${userAge}`)
    
    // chiedo i chilometri da percorrere all'utente
    const userKm = document.getElementById('km').value;
    console.log(`Chilometri da percorrere:  ${userKm}`)

})