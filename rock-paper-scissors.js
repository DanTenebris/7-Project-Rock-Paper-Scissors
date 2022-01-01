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
    return 'tie';
    //'Else' (de lo contrario) revisar:
  } else {

    //'If' playerSelection es igual a 'Rock':
    if (playerSelection === 'rock') {
      //Entonces 
      //'If' computerSelection es igual a 'Paper':
      if (computerSelection === 'paper') {
        //Escribir como resultado que "Rock loses to Paper."
        return false;
        //'If' computerSelection es igual a 'Scissors':
      } else if (computerSelection === 'scissors') {
        //Escribir "Rock beats Scissors."
        return true;
      }

      //'If' playerSelection es igual a 'Paper':
    } else if (playerSelection == 'paper') {

      //Then
      //'if' computerSelection es igual a 'Rock':
      if (computerSelection == 'rock') {
        //Escribir "Paper beats Rock."
        return true;
        //'if' computerSelection es igual a 'Scissors':
      } else if (computerSelection == 'scissors') {
        //Escribir "Paper loses to Scissors."
        return false;
      }

      //'If' playerSelection es igual a 'Scissors':
    } else if (playerSelection == 'scissors') {

      //Then
      //'if' computerSelection es igual a 'Rock':
      if (computerSelection == 'rock') {
        //Escribir "Scissors loses to Rock."
        return false;
        //'if' computerSelection es igual a 'Paper':
      } else if (computerSelection == 'paper') {
        //Escribir "Scissors beats Paper."
        return true;
      }
    }
  }
}

//La siguiente función se encargará de contar las victorias o derrotas de las rondas.
function game() {
  //Crear la variable que guardará el score del jugador.
  let playerScore = 0;
  //Crear la variable que guardará el score del pc.
  let computerScore = 0;
  //Crear un ciclo de cinco vueltas en el que se muestre el contador de las veces que el jugador y la computadora an vencido a su oponente
  for (let i = 0; i < 5; i++) {
    //Crear una variable y solicitar al jugador que ingrese 'Rock', 'Paper' o 'Scissors'
    let playerVal = prompt('Write down \'Rock\', \'Paper\' or \'Scissors\' to begin the game number ' + i + '.');
    //Crear una variable en el que se guarde la elección al azar de la computadora.
    let computerVal = computerPlay();
    //Crear variable y guardar el resultado de la comparación en una función para comparar resultado del score.
    let resultScore = gameRound(playerVal, computerVal);
    //Publicar un mensaje adecuado luego de la comparación.
    console.log('You: ' + playerVal + ', Computer: ' + computerVal);
    console.log(messageResult(playerVal, computerVal, resultScore));

    //Condicional if else para comparar y guardar el resultado.
    if ((resultScore === true) && !(resultScore === 'tie')) {
      ++playerScore;
    }
    if (resultScore === false) {
      ++computerScore;
    }

    //Publicar el actual score.
    console.log('Player: ' + playerScore + ', Computer: ' + computerScore);
  }

  //Luego de que acabe el ciclo verificar el puntaje del contador para saber quién de los dos jugadores ha ganado el juego.
  if (playerScore < computerScore) {
    return console.log('You lose de game.');
  } else if (playerScore > computerScore) {
    return console.log('You win.');
  } else {
    return console.log('Is it a tie?');
  }
  //Retornar un mensaje con el resultado correspondiente.
}

//La siguiente función verificará el resultado de la comparación de los resultados para luego retornar un mensaje adecuado.
function messageResult(playerSelection, computerSelection, result) {
  //verificando el resultado de otra función
  // Si no es cero
  if (!(result === 'tie')) {
    //'if' es verdadero:
    if (result) {
      //escribir playerSelection + ' beats ' + computerSelection;
      return playerSelection + ' beats ' + computerSelection;
      //'else'
    } else {
      //escribir playerSelection + ' loses to ' + computerSelection;
      return playerSelection + ' loses to ' + computerSelection;
    }
  } else {
    return 'It\'s a tie';
  }
}

game();