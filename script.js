const computerDecisons = ['rock', 'paper', 'scissor'];
let computerPoints = 0;
let playerPoints = 0;
const btnContainer = document.querySelector('#btn-container');
const message = document.querySelector("#message");
const score = document.querySelector('#score');
const finalMessage = document.querySelector("#final-message");
const resetMessage = document.querySelector("#reset-message");
let counter = 0;

function getComputerChoice() {
    const decisionIndex = Math.floor(Math.random() * (3));
    return computerDecisons[decisionIndex];
}

function playRound(playerSelection, computerSelection) {
    counter++;
    if(playerSelection.toLowerCase() == computerSelection) {
        playerPoints++;
        score.textContent = playerPoints;
        computerPoints++;
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
    score.textContent = playerPoints;
    return 'You won! ' + playerSelection + ' beats ' + computerSelection;
}

function loseHelper(playerSelection, computerSelection) {
    computerPoints++;
    return 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
}

// for(let i = 1; i <= 5; i++) {
//     computerSelection = getComputerChoice();
//     playerSelection = prompt('Please Enter your Decision: ');
//     console.log(playRound(playerSelection, computerSelection));
// }

btnContainer.addEventListener('click', (event) => {
    if(event.target.id == "reset") {
        window.location.reload();
    }
    if(counter > 5) {
        resetMessage.textContent = 'Please Press Reset Button to play more.';
        return;
    }
    let computerSelection = getComputerChoice();
    message.textContent = playRound(event.target.id, computerSelection);
    if(counter == 5) {
        console.log("Computer: " + computerPoints);
        console.log("Player: " + playerPoints);
        if(computerPoints == playerPoints) {
            finalMessage.textContent = "Game Tied!";
        } else if (computerPoints > playerPoints) {
            finalMessage.textContent = "You Lose!";
        } else {
            finalMessage.textContent = "You Won!";
        }
        counter++;
    }
})

