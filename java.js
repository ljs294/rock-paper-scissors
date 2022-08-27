function getComputerChoice() {
    let rand = Math.random();
    let choice;
    if (rand <= 0.33) {
        choice = 'Rock';
    } else if (rand <= 0.67) {
        choice = 'Paper';
    } else {
        choice = 'Scissors';
    }

    return choice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = capitalize(playerSelection);
    computerSelection = capitalize(computerSelection);
    let message;
    let winner = 2;

    if (playerSelection === computerSelection) {
        message = 'It\'s a draw!';
    } else if (playerSelection === 'rock' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'rock') {
        message = `You Lose! ${computerSelection} beats ${playerSelection}`;
        winner = 0;
    } else {
        message = `You Win! ${playerSelection} beats ${computerSelection}`;
        winner = 1;
    }
    return [message,winner];
}

function game() {
    let compScore = 0;
    let playerScore = 0;

    for (let i = 0; i < 5; i++) {
        result = playRound(prompt('Your Pick?'),getComputerChoice())
        console.log(result[0]);
        if (result[1] === 1) {
            playerScore++;
        } else if (result[1] === 0) {
            compScore++;
        }

        console.log(`Score is Player: ${playerScore}, Computer: ${compScore}`);
    }

    return winner;
}

function capitalize(string) {
    string = string.toLowerCase();
    string = string.replace(string.charAt(0),string.charAt(0).toUpperCase());
    return string;
}

console.log(game());