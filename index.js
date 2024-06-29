console.log("Hello World");

// Function to get the computer's choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to get the human's choice
function getHumanChoice() {
  const choice = prompt("Please enter rock, paper, or scissors:");
  return choice.toLowerCase();
}

// Function to play a single round
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
    return "tie";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    return "human";
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    return "computer";
  }
}

// Function to play the entire game
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const roundWinner = playRound(humanSelection, computerSelection);

    if (roundWinner === "human") {
      humanScore++;
    } else if (roundWinner === "computer") {
      computerScore++;
    }

    console.log(`Round ${i + 1}:`);
    console.log(`Human: ${humanSelection}`);
    console.log(`Computer: ${computerSelection}`);
    console.log(`Scores -> Human: ${humanScore}, Computer: ${computerScore}`);
  }

  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game.");
  } else if (computerScore > humanScore) {
    console.log("Sorry, you lost the game.");
  } else {
    console.log("The game is a tie.");
  }
}

// Start the game
playGame();
