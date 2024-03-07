const gameOptions = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const computerSelection = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    return computerSelection;
}

const computerSelection = getComputerChoice();
console.log("computer chose:"), console.log(computerSelection);

const playerChoice = prompt("Please select: rock, paper, or scissors");
const playerSelection = playerChoice.toLowerCase();

console.log("player chose:"), console.log(playerSelection);
console.log (playerSelection === computerSelection);

/*  if newPlayerSelection !== ("rock" || "paper" || "scissors"); {
    alert("try again!");
        prompt("Please select: Rock, Paper, or Scissors");
    }
*/
function playRound() {
    if (computerSelection === playerSelection) {
        alert ("It's a tie: ".concat(playerSelection + " vs " + computerSelection + "!"));
    } else if (playerSelection === "rock" && computerSelection === "scissors") { 
        alert ("You win: rock crushes scissors!");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        alert ("You lose: paper covers rock!");
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        alert ("You lose: scissors cut paper!");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        alert ("You win: paper covers rock!");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        alert ("You win: scissors cut paper!");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        alert ("You lose: rock crushes scissors");
    }
}

playRound(playerSelection, computerSelection)