'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = `Correct number`

document.querySelector('.number').textContent = 13
document.querySelector('.score').textContent = 789
document.querySelector('.guess').value = 23*/

let randNumb = Math.trunc(Math.random() * 20) + 1
console.log(randNumb);
let score = 20;
let highScore = 0;//let score = Number(document.querySelector('.score').textContent)

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    //console.log(guess);
    if (!guess) {
        displayMessage('⛔️ No number!');
    } else if (guess === randNumb) {
        displayMessage(`👏 Correct number`);
        document.querySelector('.number').textContent = randNumb;
        document.querySelector('body').style.backgroundColor = `#60b347`;
        document.querySelector('.number').style.width = `30rem`;
        if (score > highScore) {
            highScore = score
            document.querySelector('.highscore').textContent = score
        }
    } else if (guess !== randNumb) {
        if (score > 1) {
            displayMessage(guess > randNumb ? `📈Too high!` : `📉Too low!`);
            score--;
            document.querySelector('.score').textContent = score
        } else {
            displayMessage(`💥 You lost the game!`)
            document.querySelector('.score').textContent = 0;
        }

    }
})

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    randNumb = Math.trunc(Math.random() * 20) + 1
    document.querySelector('.score').textContent = score
    displayMessage(` Start guessing...`)
    document.querySelector('.guess').value = ``
    document.querySelector('.number').textContent = `?`;
    document.querySelector('.number').style.width = `15rem`;
    document.querySelector('body').style.backgroundColor = ` #222`;
})
