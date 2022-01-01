//La siguiente función, sin la necesidad de un parámetro, elegirá de forma aleatoria 'Rock', 'Paper' o 'Scissors'
function computerPlay() {
  //Crear un 'array' con las palabras 'Rock', 'Paper' y  'Scissors'
  let arregloRPS = ['Rock', 'Paper', 'Scissors'];
  //Elegir un número aleatorio entre el uno y el tres
  let aleatorio = Math.floor(Math.random() * 3);
  //Utilizar la palabra del 'array' dependiendo del número elegido y //Retornar el valor
  return arregloRPS[aleatorio];
}
//Probar código con console.log
console.log(computerPlay());

//La siguiente función 