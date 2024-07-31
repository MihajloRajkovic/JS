'use strict';

const playerOneEl = document.querySelector('.player--0')
const playerTwoEl = document.querySelector('.player--1')
const playerOneScoreElement = document.querySelector('#score--0')//isto je ovo
const playerTwoScoreElement = document.getElementById('score--1')
const playerOneCurrentScore = document.getElementById('current--0')
const playerTwoCurrentScore = document.getElementById('current--1')
const diceElement = document.querySelector('.dice')
const btnRollDice = document.querySelector('.btn--roll')
const btnNewGame = document.querySelector('.btn--new')
const btnSave = document.querySelector('.btn--hold')


let scores, currentScore, activePlayer, playing;


function init() {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    playerOneScoreElement.textContent = 0;
    playerTwoScoreElement.textContent = 0;
    playerOneCurrentScore.textContent = 0;
    playerTwoCurrentScore.textContent = 0;

    diceElement.classList.add('hidden');
    playerOneEl.classList.remove('player--winner');
    playerTwoEl.classList.remove('player--winner');
    playerOneEl.classList.remove('player--loser');
    playerTwoEl.classList.remove('player--loser');
    playerOneEl.classList.add('player--active');
    playerTwoEl.classList.remove('player--active');
};
init();

function changePlayer() {
    document.getElementById(`current--${activePlayer}`).textContent = 0
    currentScore = 0
    activePlayer = activePlayer === 0 ? 1 : 0;
    playerOneEl.classList.toggle('player--active')
    playerTwoEl.classList.toggle('player--active')
}

//Dice roll
btnRollDice.addEventListener('click', function () {
    if (playing) {
        let randDiceNumb = Math.trunc(Math.random() * 6) + 1
        diceElement.classList.remove('hidden')
        diceElement.src = `dice-${randDiceNumb}.png`;
        if (randDiceNumb !== 1) {
            currentScore += randDiceNumb
            document.getElementById(`current--${activePlayer}`).textContent = currentScore
        } else {
            changePlayer();
        }
    }
})

btnSave.addEventListener('click', function () {
    if (playing) {
        scores[activePlayer] += currentScore
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
        if (scores[activePlayer] >= 20) {
            playing = false;
            diceElement.classList.add('hidden')
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
            //losing player
            const losingPlayer = activePlayer === 0 ? 1 : 0;
            document.querySelector(`.player--${losingPlayer}`).classList.add('player--loser');
        } else {
            changePlayer();
        }
    }
})

btnNewGame.addEventListener('click', init)