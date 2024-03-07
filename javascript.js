const gameOptions = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    const computerChoice = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    console.log(computerChoice)
}

getComputerChoice();