let compWins = 0;
let playerWins = 0;

function newGame() {
    compWins = 0;
    playerWins = 0;
}


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

function playRound(playerSelection, computerSelection, compWins, playerWins) {
    playerSelection = capitalize(playerSelection);
    computerSelection = capitalize(computerSelection);
    let message;

    if (playerSelection === computerSelection) {
        message = 'It\'s a draw!';
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper' ||
        playerSelection === 'Paper' && computerSelection === 'Scissors' ||
        playerSelection === 'Scissors' && computerSelection === 'Rock') {
        message = `You Lose! ${computerSelection} beats ${playerSelection}`;
        compWins += 1;
    } else {
        message = `You Win! ${playerSelection} beats ${computerSelection}`;
        playerWins += 1;
    }

    // CHECKING FOR END OF GAME CASE

    if (playerWins > 4 || compWins > 4) {
        if (compWins > playerWins) {
            message = `The computer wins!`;
        } else {
            message = `You win!`;
        }
    }

    document.getElementById('results').textContent = message;
    return [compWins, playerWins];
}

function capitalize(string) {
    string = string.toLowerCase();
    string = string.replace(string.charAt(0), string.charAt(0).toUpperCase());
    return string;
}

const rpsButtons = document.querySelectorAll('.rps');
rpsButtons.forEach(rps => rps.addEventListener('click', function (e) {
    if (e.target.id === 'rock') {
        [compWins, playerWins] = playRound('rock', getComputerChoice(),
            compWins, playerWins);
    } else if (e.target.id === 'paper') {
        [compWins, playerWins] = playRound('paper', getComputerChoice(),
            compWins, playerWins);
    } else {
        [compWins, playerWins] = playRound('scissors', getComputerChoice(),
            compWins, playerWins);
    }

    score = `The score is Player: ${playerWins}, Computer: ${compWins}.`;
    document.getElementById('scoreboard').textContent = score;
}));

const restart = document.querySelector('#new-game');
restart.addEventListener('click', function(e) {
    console.log(e.target);
    newGame();
    document.getElementById('scoreboard').textContent = `A new game has started!`;
});