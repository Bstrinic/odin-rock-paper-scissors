

// Step 3

function getHumanChoice() {
    // Using prompt to get user input
    let userChoice = prompt("Rock, Paper, or Scissors?");
    userChoice = userChoice.toLowerCase();
    if (userChoice === "rock"){
        return "Rock"
    } else if (userChoice === "paper"){
        return "Paper"
    } else if (userChoice === "scissors"){
        return "Scissors"
    } else {
        // Error control
        console.log("Invalid choice, please select Rock, Paper, or Scissors. ")
        return getHumanChoice;
    }
}