const buttons = document.querySelectorAll("button");
const resultEl = document.getElementById("result")
const computerScoreE1 = document.getElementById("computer-score");
const playerscoreE1 = document.getElementById("user-score")

let playerscore = 0;
let computerScore = 0;

buttons.forEach((button) =>
{
    button.addEventListener("click", ()=> {
        const result = playRound(button.id, computerPlay());
        resultEl.textContent = result;
    });
});

function computerPlay(){
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random()* choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "it's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection) === "scissors" ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ){
        playerscore++;
        playerscoreE1.textContent = playerscore;
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }else {
        computerScore++;
        computerScoreE1.textContent = computerScore;
        return "You lose! "+ computerSelection + " beats " + playerSelection;
    }
}