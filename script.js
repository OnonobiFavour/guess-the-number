'use strict';

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highScore = 0;
const check = document.querySelector('.btn-check')
check.classList.add('check')
check.addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // when there is no input
    if(!guess){
        document.querySelector('.message').textContent = '⛔ No number!';
        
        // when player wins
    } else if (guess === secretNumber){
        document.querySelector('.message').textContent = '🎉 corret Number!';
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.
        backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highscore){
            score = highscore;
            document.querySelector('.highscore').textContent = highScore;
        }

        // when guess is too high
    } else if( guess > secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent ='Too high!';
            score--;
            document.querySelector('.score').textContent = score;  
        } else{
            document.querySelector('.message').textContent = 'you lost the game!';
            document.querySelector('.score').textContent = 0;
        }

        // Too low
    } else if(guess < secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = '😥 Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = 'you lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
}
)