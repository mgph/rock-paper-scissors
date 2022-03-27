const CHOICE = ["Rock","Paper","Scissors"];

function computerPlay() {
    return CHOICE[Math.floor(Math.random() * CHOICE.length)];
}

function playerPlay() {
    let playerSelection = prompt("Rock, Paper, or Scissors").toLowerCase();
    return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) 
        return "TIE";
    else if (playerSelection == CHOICE[0] && computerSelection == CHOICE[1])
        return "LOSE";
    else if (playerSelection == CHOICE[0] && computerSelection == CHOICE[2])
        return "WIN";
    else if (playerSelection == CHOICE[1] && computerSelection == CHOICE[0])
        return "WIN";
    else if (playerSelection == CHOICE[1] && computerSelection == CHOICE[2])
        return "LOSE";
    else if (playerSelection == CHOICE[2] && computerSelection == CHOICE[0])
        return "LOSE"; 
    else if (playerSelection == CHOICE[2] && computerSelection == CHOICE[1])
        return "WIN"; 
}

function game() {
    let playerWinCount = 0;
    let computerWinCount = 0;
    for (let i=0; i<5; i++) {
        result = playRound(playerPlay(), computerPlay())
        if (result == "WIN")
            playerWinCount++;
        else if (result == "LOSE")
            computerWinCount++;

        console.log(result);
        console.log("Player: %d", playerWinCount);
        console.log("Computer: %d", computerWinCount);
    }
}

game()