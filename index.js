const choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    let computerSelection = choices[(Math.floor(Math.random() * choices.length))];
    return computerSelection.charAt(0).toUpperCase() +
        computerSelection.slice(1)
}

function getPlayerChoice() {
    let playerSelection = prompt("Enter your choice: ").toLowerCase()
    if (choices.includes(playerSelection.toLowerCase())) {
        return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    } else {
        alert("Enter a valid value! Rock, Paper, Scissors")
        return getPlayerChoice()
    }
}

function playRound(playerSelection, computerSelection) {
    switch (true) {
        case (playerSelection === computerSelection):
            return "Draw!"
        case (playerSelection === "Rock" && computerSelection === "Scissors"):
        case (playerSelection === "Paper" && computerSelection === "Rock"):
        case (playerSelection === "Scissors" && computerSelection === "Paper"):
            return `You Won! ${playerSelection} beats ${computerSelection}`
        default:
            return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getPlayerChoice(), getComputerChoice()))
    }
}

game()

// UI