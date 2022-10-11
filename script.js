'use strict'
// 'use strict';

// let secretNumber = Math.trunc(Math.random()*20) + 1;
// let score = 20;
// let highScore = 0;
// const check = document.querySelector('.btn-check')
// check.classList.add('check')
// check.addEventListener('click', function(){
//     const guess = Number(document.querySelector('.guess').value);
//     console.log(guess, typeof guess);

//     // when there is no input
//     if(!guess){
//         document.querySelector('.message').textContent = '⛔ No number!';
        
//         // when player wins
//     } else if (guess === secretNumber){
//         document.querySelector('.message').textContent = '🎉 corret Number!';
//         document.querySelector('.number').textContent = secretNumber;

//         document.querySelector('body').style.
//         backgroundColor = '#60b347';
//         document.querySelector('.number').style.width = '30rem';

//         if(score > highscore){
//             score = highscore;
//             document.querySelector('.highscore').textContent = highScore;
//         }

//         // when guess is too high
//     } else if( guess > secretNumber){
//         if(score > 1){
//             document.querySelector('.message').textContent ='Too high!';
//             score--;
//             document.querySelector('.score').textContent = score;  
//         } else{
//             document.querySelector('.message').textContent = 'you lost the game!';
//             document.querySelector('.score').textContent = 0;
//         }

//         // Too low
//     } else if(guess < secretNumber){
//         if(score > 1){
//             document.querySelector('.message').textContent = '😥 Too low!';
//             score--;
//             document.querySelector('.score').textContent = score;
//         }else{
//             document.querySelector('.message').textContent = 'you lost the game!';
//             document.querySelector('.score').textContent = 0;
//         }
//     }
// }
// )

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'correct number';
// // console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;


// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value)
// console.log(document.querySelector('.guess').value = 20)

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('body').style.backgroundColor = '#222';

document.querySelector('.btn-check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value) 
    // let score = highScore;

    if(!guess) {
        document.querySelector('.message').textContent = 'No number!!';
    } else if(guess === secretNumber){
        document.querySelector('.message').textContent = 'correct number';
        document.querySelector('body').style.backgroundColor = 'blue';
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('.number').style.width = '15rem';



        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        
    }else if(guess > 20){
        document.querySelector('.message').textContent = 'Above the given range'
    } else if(guess > secretNumber){
        if(score > 0) {
            document.querySelector('.message').textContent = 'number is too high';
            score--;
            document.querySelector('.score').textContent = score;
        } else{
            document.querySelector('.message').textContent = 'you lost the game';
        score--;
        document.querySelector('.score').textContent = 0;
        }

        document.querySelector('.message').textContent = 'number is too high';
        score--;
        document.querySelector('.score').textContent = score;
    } else if(guess < secretNumber){
        document.querySelector('.message').textContent = 'number is too low';
        score--;
        document.querySelector('.score').textContent = score;
    }
});

// On reset..

document.querySelector('.again').addEventListener('click', function(){
    score = '20';
    secretNumber = Math.trunc(Math.random()*20) +1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '?';


    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem';

})































