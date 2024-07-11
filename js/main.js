'use strict'


const scoreZero = document.querySelector('#score--0')
const scoreOne = document.querySelector('#score--1')

const currentZero = document.querySelector('#current--0')
const currentOne = document.querySelector('#current--1')

const playerZero = document.querySelector('.player--0')
const playerOne = document.querySelector('.player--1')

const diceEl = document.querySelector('.dice')

// BUTTONS
const newGameBtn = document.querySelector('.btn--new')
const rollBtn = document.querySelector('.btn--roll')
const holdBtn = document.querySelector('.btn--hold')

let scores;
let currentScore;
let activePlayer;
let playing;

const init = function() {
    diceEl.classList.add('hidden');
    
    playerOne.classList.remove('player--active');
    playerZero.classList.add('player--active');
    playerZero.classList.remove('player--winner')
    playerOne.classList.remove('player--winner')
    
    scoreOne.textContent = 0;
    scoreZero.textContent = 0;
    currentZero.textContent = 0;
    currentOne.textContent = 0;
    
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
}

init();

scoreZero.textContent = 0;

scoreOne.textContent = 0;

const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;
        playerZero.classList.toggle('player--active')
        playerOne.classList.toggle('player--active')
}

diceEl.classList.add('hidden')

rollBtn.addEventListener('click', function() {
    if(playing) {
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `./img/dice-${diceRoll}.png`;

    if(diceRoll !== 1) {
        currentScore = currentScore + diceRoll
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        switchPlayer()
    }
}
})

holdBtn.addEventListener('click', function() {

    if(playing) {
     scores[activePlayer] += currentScore;

     document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

     if(scores[activePlayer] >= 20) {
        playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        diceEl.classList.add('hidden');
     } else {
         switchPlayer();
     }
    }
})

newGameBtn.addEventListener('click', init);
