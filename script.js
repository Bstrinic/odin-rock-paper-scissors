
// Step 2 - Logic for computer choice
function getComputerChoice() {
  let computerChoice = Math.random();

  if (computerChoice <= 0.33) {
    return "Rock";
  } else if (computerChoice <= 0.66) {
    return "Paper";
  } else {
    return "Scissors";
  } 
}

// Step 3 - Logic for human choice
function getHumanChoice() {
  // Using prompt to get user input
  let userChoice = prompt("Rock, Paper, or Scissors?");
  userChoice = userChoice.toLowerCase();
  if (userChoice === "rock") {
    return "Rock";
  } else if (userChoice === "paper") {
    return "Paper";
  } else if (userChoice === "scissors") {
    return "Scissors";
  } else {
    // Error control
    console.log("Invalid choice, please select Rock, Paper, or Scissors. ");
    return getHumanChoice();
  }
}

// Step 5 - Logic to play a round
function playRound(humanChoice, computerChoice) {
    // Possible options 
    if (humanChoice === computerChoice){
      console.log("It's a tie! Play again.");
    } else if (
      (humanChoice === "Rock" && computerChoice === "Scissors") ||
      (humanChoice === "Paper" && computerChoice === "Rock") ||
      (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
      console.log(`You win!, ${humanChoice} beats ${computerChoice}`);
    } else {
      console.log(`You lose!, ${computerChoice} beats ${humanChoice}`);
    } 
  }


function playGame() {
  // Declaring variables
  let humanScore = 0;
  let computerScore = 0;
  
  for (let i = 0; i < 5; i++) {
    const userChoice = getHumanChoice(); // Get the human's choice
    const computerChoice = getComputerChoice(); // Get the computer's choice
  
    // Play the round and determine the winner
    playRound(userChoice, computerChoice);

    if (
      (userChoice === "Rock" && computerChoice === "Scissors") ||
      (userChoice === "Paper" && computerChoice === "Rock") ||
      (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
      humanScore++;
    } else if (
      (computerChoice === "Rock" && userChoice === "Scissors") ||
      (computerChoice === "Paper" && userChoice === "Rock") ||
      (computerChoice === "Scissors" && userChoice === "Paper")
    ) {
      computerScore++; 
    }
  
    // Log the scores after each round
    console.log(`Scores after Round ${i + 1}: You - ${humanScore}, Computer - ${computerScore}`);
  }
  
  // Declare the winner after 5 rounds
  if (humanScore > computerScore) {
    console.log("Congratulations! You win the game!");
  } else if (computerScore > humanScore) {
    console.log("You lost! Please try again :)");
  } else {
    console.log("It was a tie! No winner has been decided. Please play again.");
  }
}

// Starting the game 
playGame();