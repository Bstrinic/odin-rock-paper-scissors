// Declaring global variables
let humanScore = 0;
let computerScore = 0;

// Step 2
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
console.log(getComputerChoice());
// Step 3
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
    return getHumanChoice;
  }
}

function playRound(getHumanChoice, getComputerChoice) {

    // Making parameters case sensitive
    getHumanChoice = getHumanChoice.toLowerCase();
    getComputerChoice = getComputerChoice.toLowerCase();

    
    
}
