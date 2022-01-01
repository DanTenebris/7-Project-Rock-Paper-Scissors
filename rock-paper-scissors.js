//La siguiente función, sin la necesidad de un parámetro, elegirá de forma aleatoria 'Rock', 'Paper' o 'Scissors'
function computerPlay() {
  //Crear un 'array' con las palabras 'Rock', 'Paper' y  'Scissors'
  let arregloRPS = ['Rock', 'Paper', 'Scissors'];
  //Elegir un número aleatorio entre el uno y el tres
  let aleatorio = Math.floor(Math.random() * 3);
  //Utilizar la palabra del 'array' dependiendo del número elegido y //Retornar el valor
  return arregloRPS[aleatorio];
}

//La siguiente función, recibiendo dos parámetros, elegirá cuál de ellos es el ganador de la ronda del juego
function gameRound(playerSelection, computerSelection) {
  //convertir todas las letras de los parámetros recibidos a minúsculas
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  //'If' ambos parámetros tienen el mismo valor, independientemente de su grafía (forma de representar los sonidos en las letras)
  if (playerSelection === computerSelection) {
    //Escribir en una variable que el resultado es un empate
    return 'It\'s a tie.';
    //'Else' (de lo contrario) revisar:
  } else {

    //'If' playerSelection es igual a 'Rock':
    if (playerSelection === 'rock') {
      //Entonces 
      //'If' computerSelection es igual a 'Paper':
      if (computerSelection === 'paper') {
        //Escribir como resultado que "Rock loses to Paper."
        return 'Rock loses to Paper.';
        //'If' computerSelection es igual a 'Scissors':
      } else if (computerSelection === 'scissors') {
        //Escribir "Rock beats Scissors."
        return 'Rock beats Scissors.';
      }

      //'If' playerSelection es igual a 'Paper':
    } else if (playerSelection == 'paper') {

      //Then
      //'if' computerSelection es igual a 'Rock':
      if (computerSelection == 'rock') {
        //Escribir "Paper beats Rock."
        return "Paper beats Rock.";
        //'if' computerSelection es igual a 'Scissors':
      } else if (computerSelection == 'scissors') {
        //Escribir "Paper loses to Scissors."
        return "Paper loses to Scissors.";
      }

      //'If' playerSelection es igual a 'Scissors':
    } else if (playerSelection == 'scissors') {

      //Then
      //'if' computerSelection es igual a 'Rock':
      if (computerSelection == 'rock') {
        //Escribir "Scissors loses to Rock."
        return "Scissors loses to Rock.";
        //'if' computerSelection es igual a 'Paper':
      } else if (computerSelection == 'paper') {
        //Escribir "Scissors beats Paper."
        return "Scissors beats Paper.";
      }
    }
  }

  //Retornar el resultado
  return 'Is there an error?';
}

//Probando código
console.log('Selección com= ' + computerPlay());
let playerSelection = 'ROCK';
console.log('Selección jugador= ' + playerSelection);
console.log(gameRound(playerSelection, computerPlay()));
console.log('Selección jugador= ' + playerSelection);