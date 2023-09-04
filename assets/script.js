/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro
 ed emetto un messaggio in console con il numero della cella cliccata. */


//definisco le variabili
 const btn = document.querySelector('button');
 const cellElement = document.querySelector('.cell');
 
 //faccio comparire al click del bottone la griglia 
 btn.addEventListener('click', () => {
     btn.classList.add('d-none');
     cellElement.classList.remove('d-none')
 
    generatecell(cellElement, 100)
 })
 
 //uso una funzione per generare le celle
 function generatecell(element, max) {
 
     for (let i = 1; i <= max; i++) {
        
        const squareEl = document.createElement('div');

        squareEl.className = 'square bg-warning';
        element.append(squareEl);

        squareEl.id = `${i}`

        squareEl.addEventListener('click', function() {

            squareEl.classList.toggle('bg-warning')
            
            squareEl.classList.toggle('bg-danger')
        
            //stampo in console il numero della cella cliccata
            console.log(squareEl.id);

        })
        
    }
    
}
 
 
 