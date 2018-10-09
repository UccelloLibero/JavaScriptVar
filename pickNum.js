var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 10) + 1;
var guess = prompt('I am thinking of a number between 1 and 10, can you guess the number?');
// if (parseInt(guess) === randomNumber) {
//  document.write('<h2>Bravo, you guessed the number!</h2>')
//} else {
//  document.write('<h2>Sorry but that is not the correct number. The number I was thinking of is ' + randomNumber + ' </h2>')
//}
if (parseInt(guess) === randomNumber) {
  correctGuess = true;
}
if (correctGuess === true) {
  document.write("<h2>You've guess the number!</h2>");
} else {
  document.write("<h2>Sorry but that is not the correct number. The number I was thinking of was " + randomNumber + " </h2>");
}
