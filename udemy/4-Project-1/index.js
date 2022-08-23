'use strict';

let SecretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 5;
const display = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector(".start").textContent = score;
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess, guess);

    //invalid number
    if (!guess || guess > 20) {
        display("Not valid number!! 🚫");
    }

    //When player wins
    else if (guess === SecretNumber) {  
        display("🎉 Correct Number..");
        document.querySelector('body').style.backgroundColor = "#42d437";
        document.querySelector(".number").textContent = SecretNumber;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.high').textContent = highscore;
        }
    }
        
        //if guess is wrong 
    else if (guess !== SecretNumber) {
        if (score > 1) {
            display(guess > SecretNumber ? "Go lower 📉" : "Go higher 📈");
            score--;
            document.querySelector(".start").textContent = score;
        }
        else {
            display("You lost the game 🤦‍♂️");
            document.querySelector(".start").textContent = 0;
        }
    }   
        
})

document.querySelector('.reset').addEventListener('click', function () {
    score = 5;
    SecretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = "white";
    document.querySelector('.guess').value = "";
    display("Start Guessing....");
    document.querySelector('.start').textContent = score;
    document.querySelector('.number').textContent = "?";
})