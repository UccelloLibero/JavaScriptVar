var startingNum = prompt("Pick a starting number...");
var lowNum = parseInt(startingNum);
var userNum = prompt("Pick a number, any number...");
var highNum = parseInt(userNum);
var randomNum = Math.floor(Math.random() * (highNum - lowNum + 1)) + lowNum;
var message = "<h2>" + randomNum + " is a number between " + lowNum + " and " + highNum + ".</h2>";
document.write(message)
