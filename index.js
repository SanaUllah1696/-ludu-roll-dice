var buttonStart = document.getElementById('button-start');

buttonStart.onclick=function()
{
  // var ranNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

  var ranNumber1=Math.random();
  ranNumber1 = ranNumber1 * 6;
  ranNumber1=Math.floor(ranNumber1)+1;



var randomImageSource= "images/dice" + ranNumber1 + ".png"; //dice1.png - dice6.png

// var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
if (ranNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = " Player 1 Wins!";
}
else if (randomNumber2 > ranNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! ";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}

}
