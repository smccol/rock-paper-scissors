const computerChoiceDisplay = document.getElementById('computerChoice');
const userChoiceDisplay = document.getElementById('playerChoice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
const scorePlayerDisplay = document.getElementById('score-player');
const scoreComputerDisplay = document.getElementById('score-cpu');
let computerScore = 0;
let playerScore = 0;
let computerChoice;
let userChoice;
let result;
const winner = document.querySelector('h1');

possibleChoices.forEach((possibleChoice) => {
    possibleChoice.addEventListener('click', (e) => {
        playerChoice = e.target.id
        userChoiceDisplay.innerHTML = playerChoice
        getComputerChoice();
        playRound();
        keepScore();
        alertWinner();
});
})

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        computerChoice = 'rock';
    } else if (randomNumber === 2) {
        computerChoice = 'paper';
    } else if (randomNumber === 3) {
        computerChoice = 'scissors';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}


function playRound() {
    if (playerChoice === computerChoice) {
        result = ("It's a tie!")
    } else if ((playerChoice === "rock") && (computerChoice === "paper")) {
        result = ("You Lose! Paper beats Rock!");
    } else if ((playerChoice === "rock") && (computerChoice === "scissors")) {
        result = ("You Win! Rock beats Scissors!");
    } else if ((playerChoice === "paper") && (computerChoice === "scissors")) {
        result = ("You Lose! Scissors beats Paper!");
    } else if ((playerChoice === "paper") && (computerChoice === "rock")) {
        result = ("You Win! Paper beats Rock!");
    } else if ((playerChoice === "scissors") && (computerChoice === "paper")) {
        result = ("You Win! Scissors beats Paper!");
    } else if ((playerChoice === "scissors") && (computerChoice === "rock")) {
        result = ("You Lose! Rock beats Scissors!");
    }
    resultDisplay.innerHTML = result;
}

function keepScore() {
        if (result.includes("Win")) {
            ++playerScore;
        }
        if (result.includes("Lose")) {
            ++computerScore;
        }
        scorePlayerDisplay.innerHTML = playerScore;
        scoreComputerDisplay.innerHTML = computerScore;

}

function alertWinner() {
    if (playerScore + computerScore === 5){
        if (playerScore > computerScore){
            winner.innerHTML = 'You win!';
        } else winner.innerHTML = 'Computer wins!';
    }
}