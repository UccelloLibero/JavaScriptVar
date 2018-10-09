var randomNumber = Math.floor(Math.random() * 10) + 1;
var guess = prompt('I am thinking of a number between 1 anf 10, can you guess the number?');
if (parseInt(guess) === randomNumber) {
  document.write('<h2>Bravo, you guessed the number!</h2>')
} else {
  document.write('<h2>Sorry but that is not a correct number. The number I was thinking of is ' + randomNumber + '</h2>')
}
