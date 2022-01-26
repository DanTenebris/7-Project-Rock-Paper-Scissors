//DOM
const body = document.querySelector('body');

//Aquí van los botones
const mainDiv = document.getElementsByClassName('main')[0];

const button1 = document.getElementById('rock');
const button2 = document.getElementById('paper');
const button3 = document.getElementById('scissors');

const reloadButton = document.createElement('button');

reloadButton.setAttribute('id', 'rld');
reloadButton.setAttribute('style', 'min-height: 70px');
reloadButton.textContent = 'Play Again!';

const articleOption = document.getElementsByClassName('optionDiv')[0];

//Aquí van los mensajes
const messageDiv = document.getElementsByClassName('messageDiv')[0];
const messageP = document.getElementsByClassName('messageP')[0];

const selectedDiv = document.createElement('article');
mainDiv.appendChild(selectedDiv);
selectedDiv.setAttribute('class', 'selectDiv');

const playerSelection = document.createElement('p');
const computerSelection = document.createElement('p');
selectedDiv.appendChild(playerSelection);
selectedDiv.appendChild(computerSelection);
selectedDiv.style.display = 'none';

const pWinnerAnnouncement = document.createElement('p');

//Aquí va el score del juego
const scoreTitleDiv = document.createElement('div');
scoreTitleDiv.setAttribute('class', 'scoreTitle');
mainDiv.appendChild(scoreTitleDiv);
scoreTitleDiv.style.display = 'none';

const scoreTitleP = document.createElement('p');
scoreTitleDiv.appendChild(scoreTitleP);
scoreTitleP.textContent = 'Score';

const scoreDiv = document.createElement('div');
scoreDiv.setAttribute('class', 'scoreDiv');
mainDiv.appendChild(scoreDiv);
scoreDiv.style.display = 'none';

const playerScoreP = document.createElement('p');
const computerScoreP = document.createElement('p');
scoreDiv.appendChild(playerScoreP);
scoreDiv.appendChild(computerScoreP);

let playerGlobalScore = 0;
let computerGlobalScore = 0;


const buttons = document.querySelectorAll('button');

//Identifica el id de los botones.
buttons.forEach((button) => {

  button.addEventListener('click', () => {
    switch (button.id) {
      case 'rock':
        game('Rock');
        break;
      case 'paper':
        game('Paper');
        break;
      case 'scissors':
        game('Scissors');
        break;
      default:
        break;
    }
  });

});

//Elige de forma aleatoria 'Rock', 'Paper' o 'Scissors'
function computerPlay() {
  let arregloRPS = ['Rock', 'Paper', 'Scissors'];
  let aleatorio = Math.floor(Math.random() * 3);
  return arregloRPS[aleatorio];
}

//La siguiente función, recibiendo dos parámetros, elegirá cuál de ellos es el ganador de la ronda del juego
function gameRound(playerSelection, computerSelection) {

  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return 'tie';
  } else {

    if (playerSelection === 'rock') {
      if (computerSelection === 'paper') {
        //"Rock loses to Paper."
        return false;
      } else if (computerSelection === 'scissors') {
        //"Rock beats Scissors."
        return true;
      }

    } else if (playerSelection == 'paper') {
      if (computerSelection == 'rock') {
        //"Paper beats Rock."
        return true;
      } else if (computerSelection == 'scissors') {
        //"Paper loses to Scissors."
        return false;
      }

    } else if (playerSelection == 'scissors') {
      if (computerSelection == 'rock') {
        //"Scissors loses to Rock."
        return false;
      } else if (computerSelection == 'paper') {
        //"Scissors beats Paper."
        return true;
      }
    }
  }
}

//Esta función vuelve visible los elementos ocultos.
function displayElements() {
  selectedDiv.style.display = 'grid';
  scoreTitleDiv.style.display = 'grid';
  scoreDiv.style.display = 'grid';
  return;
}

//La siguiente función se encargará de contar las victorias o derrotas de las rondas.
function game(gameButtonValue) {

  let playerVal = gameButtonValue;
  let computerVal = computerPlay();
  let resultScore = gameRound(playerVal, computerVal);

  displayElements();

  playerSelection.textContent = 'You selected ' + playerVal;
  computerSelection.textContent = 'Computer selected ' + computerVal;
  messageP.textContent = messageResult(playerVal, computerVal, resultScore);

  compareGameScore(resultScore);
  showWinner();

}

//La siguiente función verificará el resultado de la comparación de los resultados para luego retornar un mensaje adecuado.
function messageResult(playerSelection, computerSelection, result) {
  if (!(result === 'tie')) {
    if (result) {
      return playerSelection + ' beats ' + computerSelection;
    } else {
      return playerSelection + ' loses to ' + computerSelection;
    }
  } else {
    return 'It\'s a tie';
  }
}


function compareGameScore(roundResult) {

  if ((roundResult) && !(roundResult === 'tie')) {
    ++playerGlobalScore;

  } else if (roundResult === false) {
    ++computerGlobalScore
  }
  playerScoreP.textContent = 'Player Score: ' + playerGlobalScore;
  computerScoreP.textContent = 'Computer Score: ' + computerGlobalScore;
  return;
}

function showWinner() {

  if (playerGlobalScore == 5) {
    pWinnerAnnouncement.textContent = 'You Win.';
    pWinnerAnnouncement.style.backgroundColor = 'green';
    showFinalResult();

  } else if (computerGlobalScore == 5) {
    pWinnerAnnouncement.textContent = 'Game Over';
    pWinnerAnnouncement.style.backgroundColor = '#8a0000';
    showFinalResult();
  } else {
    return;
  }

}

function showFinalResult() {
  while (articleOption.firstChild) {
    articleOption.removeChild(articleOption.lastChild);
  }
  mainDiv.appendChild(reloadButton);
  articleOption.appendChild(pWinnerAnnouncement);
  return reloadButton.addEventListener('click', () => {
    location.reload();
  });
}