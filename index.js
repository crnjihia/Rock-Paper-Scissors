// Function to get the computer's choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to play a single round
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  const resultDisplay = document.getElementById("result");
  if (!resultDisplay) {
    console.error("Result display element not found.");
    return;
  }

  let scoreDisplay = document.getElementById("score");
  if (!scoreDisplay) {
    console.error("Score display element not found.");
    return;
  }

  if (humanChoice === computerChoice) {
    resultDisplay.textContent = "It's a tie!";
    return "tie";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    resultDisplay.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    return "human";
  } else {
    resultDisplay.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    return "computer";
  }
}

// Function to update score
function updateScore(winner) {
  let scoreDisplay = document.getElementById("score");
  if (!scoreDisplay) {
    console.error("Score display element not found.");
    return;
  }

  let [playerScore, computerScore] = scoreDisplay.textContent.match(/\d+/g);

  if (winner === "human") {
    playerScore++;
  } else if (winner === "computer") {
    computerScore++;
  }

  scoreDisplay.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}

// Function to handle button clicks
function handleButtonClick(event) {
  const playerSelection = event.target.id;
  const computerSelection = getComputerChoice();
  const roundWinner = playRound(playerSelection, computerSelection);
  updateScore(roundWinner);
}

// Add event listeners to buttons
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});
