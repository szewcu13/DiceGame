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


const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

scoreZero.textContent = 0;

scoreOne.textContent = 0;

diceEl.classList.add('hidden')

rollBtn.addEventListener('click', function() {
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `./img/dice-${diceRoll}.png`;

    if(diceRoll !== 1) {
        currentScore = currentScore + diceRoll
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;
        playerZero.classList.toggle('player--active')
        playerOne.classList.toggle('player--active')
    }
})