function getComputerChoice() {
    let rand = math.random();
    let choice;
    if (rand <= 0.33) {
        choice = 'Rock';
    } else if (rand <= 0.67) {
        choice = 'Paper';
    } else {
        choice = 'Scissors';
    }
}