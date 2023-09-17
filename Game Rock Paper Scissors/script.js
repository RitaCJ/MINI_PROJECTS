"use strict"

const computer = document.getElementById("computer-choice");
const user= document.getElementById("user-choice");
const result = document.getElementById("game-result");
const choice = document.querySelectorAll("button");

let computerChoice;
let userChoice;
let resultGame;

choice.forEach(choice => choice.addEventListener("click", (gameChoice) => {
    userChoice = gameChoice.target.id;
    user.innerHTML = userChoice;
    generateComputerChoice();
    getResultGame();

}))

function  generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if(randomNumber === 1){
        computerChoice = "Rock"
    }

    if(randomNumber === 2){
        computerChoice = "Scissor"
    }

    if(randomNumber === 3){
        computerChoice = "Paper"
    }

    computer.innerHTML = computerChoice;
}

function getResultGame(){
    if(computerChoice === userChoice){
        resultGame = "Its a draw";
    }

    if(computerChoice === "Rock" && userChoice === "Paper"){
        resultGame = "You Win!";
    }

    if(computerChoice === "Paper" && userChoice === "Scissor"){
        resultGame = "You Win!";
    }

    if(computerChoice === "Scissor" && userChoice === "Rock"){
        resultGame = "You Win!";
    }

    if(computerChoice === "Paper" && userChoice === "Rock"){
        resultGame = "You Lose!"
    }

    if(computerChoice === "Scissor" && userChoice === "Paper"){
        resultGame = "You Lose!"
    }


    if(computerChoice === "Rock" && userChoice === "Scissor"){
        resultGame = "You Lose!"
    }


    result.innerHTML = resultGame;
   

}
