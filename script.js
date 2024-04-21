const computerDecisons = ['rock', 'paper', 'scissor'];
let computerPoints = 0;
let playerPoints = 0;


function getComputerChoice() {
    const decisionIndex = Math.floor(Math.random() * (3));
    return computerDecisons[decisionIndex];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() == computerSelection) {
        return 'Game Tied!';
    } else if (playerSelection.toLowerCase() == 'rock') {
        if(computerSelection == 'paper') {
            return loseHelper(playerSelection, computerSelection);
        } else {
            return winHelper(playerSelection, computerSelection);
        }
    } else if (playerSelection.toLowerCase() == 'paper') {
        if(computerSelection == 'scissor') {
            return loseHelper(playerSelection, computerSelection);
        } else {
            return winHelper(playerSelection, computerSelection);
        }
    } else if (playerSelection.toLowerCase() == 'scissor') {
        if(computerSelection == 'rock') {
            return loseHelper(playerSelection, computerSelection);
        } else {
            return winHelper(playerSelection, computerSelection);
        }
    } else {
        return 'Please enter valid input.';
    }
}

function winHelper(playerSelection, computerSelection) {
    playerPoints++;
    return 'You won! ' + playerSelection + ' beats ' + computerSelection;
}

function loseHelper(playerSelection, computerSelection) {
    computerPoints++;
    return 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
}

for(let i = 1; i <= 5; i++) {
    computerSelection = getComputerChoice();
    playerSelection = prompt('Please Enter your Decision: ');
    console.log(playRound(playerSelection, computerSelection));
}

if(computerPoints == playerPoints) {
    console.log('Game Tied!');
} else if (computerPoints > playerPoints) {
    console.log('Computer Won!');
} else {
    console.log('You Won!');
}