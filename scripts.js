let words = ['rock', 'paper', 'scissors' ];
function getComputerChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

let result = '';

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection) {
        result = ("It's a tie!")
    } else if ((playerSelection.toLowerCase() === "rock") && (computerSelection === "paper")) {
        result = ("You Lose! Paper beats Rock!");
    } else if ((playerSelection.toLowerCase() === "rock") && (computerSelection === "scissors")) {
        result = ("You Win! Rock beats Scissors!");
    } else if ((playerSelection.toLowerCase() === "paper") && (computerSelection === "scissors")) {
        result = ("You Lose! Scissors beats Paper!");
    } else if ((playerSelection.toLowerCase() === "paper") && (computerSelection === "rock")) {
        result = ("You Win! Paper beats Rock!");
    } else if ((playerSelection.toLowerCase() === "scissors") && (computerSelection === "paper")) {
        result = ("You Win! Scissors beats Paper!");
    } else if ((playerSelection.toLowerCase() === "scissors") && (computerSelection === "rock")) {
        result = ("You Lose! Rock beats Scissors!");
    }
    return result;
}


function game() {
    let computerScore = 0;
    let playerScore = 0;
    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice(words);
        let playerSelection = prompt('Type: Rock, Paper, or Scissors')
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection)); {
            if (result.includes("Win")) {
                ++playerScore;
            } else if (result.includes("Lose")) {
                ++computerScore;
        }
    }
    }
    if (playerScore > computerScore) {
        return "You win!";
    } else if (playerScore < computerScore) {
        return "You lose!";
    } else return "Draw!";
}

console.log(game());