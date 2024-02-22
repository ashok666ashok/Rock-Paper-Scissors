/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/
let totalScore = { playerChoice: 0, computerChoice: 0 };
// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
  const rpsChoice = ["Rock", "Paper", "Siscor"];
  const randomNumber = Math.floor(Math.random() * 3);
  return rpsChoice[randomNumber];
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  let score;
  // All situations where human draws, set `score` to 0
  if (playerChoice == computerChoice) {
    score = 0;
    return score;
  }
  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  else if (playerChoice == "Rock" && computerChoice == "Siscor") {
    score = 1;
    return score;
  } else if (playerChoice == "Paper" && computerChoice == "Rock") {
    score = 1;
    return score;
  } else if (playerChoice == "Siscor" && computerChoice == "Paper") {
    score = 1;
    return score;
  }
  // Otherwise human loses (aka set score to -1)
  else {
    score = -1;
    // return score
    return score;
  }
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // Don't forget to grab the div with the 'result' id!
  const result = document.getElementById("result");
  const hand = document.getElementById("hand");
  const playerScore = document.getElementById("playerScore");

  if (score == -1) {
    result.innerText = "YOU LOSE";
  } else if (score == 0) {
    result.innerText = "TIED";
  } else {
    result.innerText = "YOU WON!";
  }

  hand.innerText = `👦 ${playerChoice} VS 🤖 ${computerChoice}`;
  playerScore.innerText = `Youre score : ${totalScore.playerChoice}`;

  const endGameButton = document.getElementById("end");
  endGameButton.onclick = () => endGame();
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  const compchoice = getComputerChoice();
  const score = getResult(playerChoice, compchoice);
  totalScore["playerChoice"] += score;
  // You should do result.innerText = 'You Lose!'
  showResult(score,playerChoice,compchoice)
  
}

// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  const rpsButton = document.querySelectorAll(".rps");
  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *

  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  rpsButton.forEach((rps) => {
    rps.onclick = () => onClickRPS(rps.value);
  });
}

// 4. Make sure to pass the currently selected rps button as an argument

// Add a click listener to the end game button that runs the endGame() function on click

// ** endGame function clears all the text on the DOM **
function endGame() {
  const result = document.getElementById("result");
  const hand = document.getElementById("hand");
  const playerScore = document.getElementById("playerScore");
  totalScore.playerChoice=0

  result.innerText=''
  hand.innerText=''
  playerScore.innerText=''
}

playGame();
