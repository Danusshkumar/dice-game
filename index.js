//rolling dice 
// showing the number based on the dice 
// we will use random number generator for this
// changing h1 based on who wins
// adding flag icon in the correct position based on this

function rollDice(){
    var player1Rand = Math.floor( (Math.random() * 6) ) + 1;
    var player2Rand = Math.floor( (Math.random() * 6) ) + 1;

    var result = document.querySelector("h1");

    var dice1 = document.querySelector(".img1");
    var dice2 = document.querySelector(".img2");

    dice1.setAttribute("src", "./images/dice" + player1Rand +".png");
    dice2.setAttribute("src", "./images/dice" + player2Rand + ".png");

    var flag = "🚩";

    if(player1Rand === player2Rand){
        result.innerHTML = "Draw!";
    }
    else if(player1Rand > player2Rand){
        result.innerHTML = flag + "Player 1 wins !";
    }
    else {
        result.innerHTML = "Player 2 wins !" + flag;
    }
}

rollDice();