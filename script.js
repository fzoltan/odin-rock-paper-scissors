let playerScore = 0;
let computerScore = 0;

const buttons = Array.from(document.querySelectorAll(".choice-button"));
buttons.forEach(button => {
    button.addEventListener('click', function () {
        playRound(button.id, getComputerChoice())
    });
})

function getComputerChoice() {
    let rand_num = Math.floor(Math.random() * 3) + 1;
    switch (rand_num) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    results = document.querySelector('.results-details');
    results.textContent = "test";
    if (playerSelection === computerSelection) {
        results.textContent = `Draw! Current Scores - Player: ${playerScore}, Computer: ${computerScore}`;
    }
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computerScore++;
            results.textContent = `Lost! Current Scores - Player: ${playerScore}, Computer: ${computerScore}`;
        }
        else if (computerSelection === "scissors") {
            playerScore++;
            results.textContent = `Won! Current Scores - Player: ${playerScore}, Computer: ${computerScore}`;
        }
    }

    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            computerScore++;
            results.textContent = `Lost! Current Scores - Player: ${playerScore}, Computer: ${computerScore}`;
        }
        else if (computerSelection === "rock") {
            playerScore++;
            results.textContent = `Won! Current Scores - Player: ${playerScore}, Computer: ${computerScore}`;
        }
    }

    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerScore++;
            results.textContent = `Lost! Current Scores - Player: ${playerScore}, Computer: ${computerScore}`;
        }
        else if (computerSelection === "paper") {
            playerScore++;
            results.textContent = `Won! Current Scores - Player: ${playerScore}, Computer: ${computerScore}`;
        }
    }

    if(playerScore == 5 || computerScore == 5)
    {
        buttons.forEach(button => {
            button.style.visibility = "hidden";});
        (playerScore === 5) ? results.textContent = `You Won! Final score - Player: ${playerScore}, Computer: ${computerScore}` : results.textContent = `You Lost! Final score - Player: ${playerScore}, Computer: ${computerScore}`;
    }
}