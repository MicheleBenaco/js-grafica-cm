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
    let numCell;
    const levelGame = document.getElementById('livello');
    const level = levelGame.value;
    switch(level){
        case '1':
         default:
            numCell = 100;
        break;
        case '2':
            numCell = 81;
        break;
        case '3':
            numCell = 49;
        break;
    }
    console.log(level)
    // funzione che genera la cella
    function drawCell (num){
        const cellaPerSide = Math.sqrt(numCell);
        const cella = document.createElement('div');
        cella.className = 'square';
        cella.style.width = `calc(100% / ${cellaPerSide})`;
        cella.style.height = `calc(100% / ${cellaPerSide})`;
        cella.innerHTML=`<span> ${num}</span>  `;

    // funzione che cambia il colore alla cella
    cella.addEventListener('click',function(){
        this.classList.add('colorSquare')
    })

        return cella;
    

        
    }
// funzione che genera la griglia di gioco 
    function genereteGrid(){
        const grid = document.createElement('div');
        grid.className = 'grid'; 
        for(let i=1; i <= numCell; i++){
            const cella = drawCell(i);
            grid.appendChild(cella)


            // const cella = document.createElement('div');
            // cella.className = 'square';
            // cella.innerHTML = `<span> ${i++}</span> `;
            // grid.appendChild(cella)
            // cella.style.width = `calc(100% / ${cellSide})`
            // cella.style.height = `calc(100% / ${cellSide})`

        }

        
        fieldGame.appendChild(grid);
       
    }
    // chiamo la funzione
    genereteGrid();

    }



// avvio il gioco al click del bottone
btnPlay.addEventListener('click',play);