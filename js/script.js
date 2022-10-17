// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

// prendo il bottone
const btnPlay = document.getElementById('play');


// funzione che fara partire il gioco 
function play(){
    const fieldGame = document.getElementById('box-grglia');
    fieldGame.innerHTML = '';


//    livello di gioco  
    const levelGame = document.getElementById('livello');
    const livello = levelGame.value;
    let numCelle;
    switch(livello){
        case '1':
            numCelle = 100;
        break
        case '2':
            numCelle = 81;
        break
        case '3':
            numCelle = 49;
        break
    }
    let cellSide = Math.sqrt(numCelle);
// funzione che genra la griglia di gioco 
    function genereteGrid(){
        
        const grid = document.createElement('div');
        grid.className = 'grid'; 
        for(let i=0; i <= 100; i++){
            const cella = document.createElement('div');
            cella.className = 'square';
            cella.innerHTML = `<span> ${i++}</span> `;
            grid.appendChild(cella)
            cella.style.width = `calc(100% / ${cellSide})`
            cella.style.height = `calc(100% / ${cellSide})`

        }

        
        fieldGame.appendChild(grid);
       
    }
    // chiamo la funzione
    genereteGrid();

    }



// avvio il gioco al click del bottone
btnPlay.addEventListener('click',play);