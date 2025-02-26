# Rock, Paper, Scissors Game - JavaScript

## Project Overview
This assignment focuses on creating a simple "Rock, Paper, Scissors" game that is played entirely in the browser's console. The game will allow a human player to play against the computer, with the game logic being implemented using JavaScript. The game progresses through multiple steps, including generating random computer choices, getting human input, tracking scores, and playing multiple rounds.

## Steps Breakdown

### Step 1: Setup the Project Structure
- Create a new Git repository for the project.
- Initialize a blank HTML document with a script tag.
- Verify if JavaScript is linked correctly by logging `console.log("Hello World")`.
- Ensure "Hello World" appears in the browser console to confirm that the setup is correct.
- Link to an external JavaScript file for better organization.

### Step 2: Get the Computer's Choice
- Write a function `getComputerChoice` that randomly returns one of the following strings: `"rock"`, `"paper"`, or `"scissors"`.
- Use the `Math.random()` method to generate a random number and map it to one of the choices.
- Test the function to make sure it returns the expected result.

### Step 3: Get the Human's Choice
- Write a function `getHumanChoice` that takes the user's input via `prompt()` and returns the selected choice.
- Ensure that the input is case-insensitive (e.g., "rock", "ROCK", "RocK" should all be valid inputs).
- Test the function to check that it returns the correct choice.

### Step 4: Declare the Players' Score Variables
- Create two global variables: `humanScore` and `computerScore`.
- Initialize these variables with the value of 0 to track each player's score.

### Step 5: Play a Single Round
- Write the function `playRound` that takes both the human's and the computer's choices as arguments.
- Implement the logic to compare the choices and declare a round winner (e.g., "You lose! Paper beats Rock").
- Increment the score of the round winner (either the human or the computer).

### Step 6: Play the Entire Game
- Write a `playGame` function that plays 5 rounds by calling the `playRound` function 5 times.
- Track the score over 5 rounds and declare the overall winner at the end.
- Ensure the game logic is set up correctly and rework previous functions as needed to achieve the desired functionality.

## Key Learning Objectives
- Understanding how to interact with the browser console using `console.log()`, `prompt()`, and `Math.random()`.
- Practicing writing functions and understanding how to pass and return data between them.
- Managing game state with variables like `humanScore` and `computerScore`.
- Using conditionals to compare choices and determine a winner.
- Gaining experience with organizing code and implementing simple game mechanics.

## Technologies Used
- **HTML:** To structure the basic setup for the project.
- **JavaScript:** To handle the game logic, including random choice generation, player input, and score tracking.

## Conclusion
By the end of this project, I will create a "Rock, Paper, Scissors" game that is played in the browser console. This assignment will help me with key JavaScript concepts such as functions, conditionals, and managing state.
