'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let highscore1 = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const x = function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('no number');
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('correct number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    highScore = score;
    document.querySelector('.highscore').textContent = highScore;

    // if (score > highScore) {
    //   highScore = score;
    //   document.querySelector('.highscore').textContent = highScore;
    // }

    if (highScore > highscore1) {
      highscore1 = highScore;
      document.querySelector('.highscore1').textContent = highscore1;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'too high!' : 'to low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
};
document.querySelector('.check').addEventListener('click', x);

const again = function () {
  score = 20;

  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  // highScore = 0;
  // document.querySelector('.highscore').textContent = highScore;

  //להראות את מספר הניחוש
  // document.querySelector('.number').textContent = secretNumber;
};
document.querySelector('.again').addEventListener('click', again);



window.addEventListener('keydown', e => {
  if (e.key === 'r') {
    again();
  }

  if (e.key === 'f') {
    document.querySelector('.guess').focus()
  }

  if (e.key === 'Enter') {
    x()
    document.querySelector('.guess').value = '';
  }

if(e.key === 'g'){

  document.querySelector('.number').textContent = secretNumber;
}

});


