const gameOptions = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const computerSelection = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    return computerSelection;
}

function getPlayerChoice() {
    const playerChoice = prompt("Please select: rock, paper, or scissors");
    const playerSelection = playerChoice.toLowerCase();
    return playerSelection;
}

let x = 0;
let y = 0;
let computerScore = x;
let playerScore = y;

function playRound() {
    const computerSelection = getComputerChoice();
    const playerSelection = getPlayerChoice();
    if (computerSelection === playerSelection) {
        alert ("It's a tie: ".concat(playerSelection + " vs " + computerSelection + "!"));
    } else if (playerSelection === "rock" && computerSelection === "scissors") { 
        alert ("You win: rock crushes scissors!");
        playerScore =  y++;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        alert ("You lose: paper covers rock!");
        computerScore = x++;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        alert ("You lose: scissors cut paper!");
        computerScore = x++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        alert ("You win: paper covers rock!");
        playerScore =  y++;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        alert ("You win: scissors cut paper!");
        playerScore =  y++;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        alert ("You lose: rock crushes scissors");
        computerScore = x++;
    }
    console.log(x,y)
}

function playGame() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    if (x > y) {
        alert ("The Computer Wins! " .concat(x + " to " + y));
    }   else alert ("You Win! " .concat(y + " to " + x));
}

playGame()