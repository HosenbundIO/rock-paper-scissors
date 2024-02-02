const weapons = {
  rock: { weakTo: ["paper", "✋"] },
  paper: { weakTo: ["scissors", "✌️"] },
  scissors: { weakTo: ["rock", "✊"] },
};

const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
const playerResult = document.getElementById("playerResult");
const computerResult = document.getElementById("computerResult");
const resultDisplay = document.getElementById("result");
let computerCounter = 0;
let playerCounter = 0;

function getComputerChoice() {
  const weaponKeys = Object.keys(weapons);
  const randomIndex = Math.floor(Math.random() * weaponKeys.length);
  return weaponKeys[randomIndex];
}

function playRound(button, playerChoice) {
  let resultStr = "";
  const computerChoice = getComputerChoice();

  playerResult.style.fontSize = "100px";
  computerResult.style.fontSize = "100px";

  if (playerChoice === computerChoice) {
    computerResult.textContent = button.textContent;
    resultStr = "It's a tie!";
  } else if (weapons[playerChoice].weakTo[0] === computerChoice) {
    computerResult.textContent = weapons[playerChoice].weakTo[1];
    computerCounter += 1;
    resultStr = "You lose!";
  } else {
    playerCounter += 1;
    resultStr = "You win!";
  }
  playerResult.textContent = button.textContent;
  computerScore.textContent = computerCounter;
  playerScore.textContent = playerCounter;
  result.textContent = resultStr;
}
