const playerOne = prompt("Choose rock, paper or scissors");
let playerSelection = playerOne.toLowerCase();


function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random()*options.length)]
}

function playRound(player, computer) {
    if(player == computer) {
        return player + "-" + computer + " Tie"
    } else if (player == "rock" && computer == "paper") {
        return player + "-" + computer + " computer wins"
    } else if(player == "paper" && computer == "rock") {
        return player + "-" + computer + " player wins"
    } else if (player == "rock" && computer == "scissors") {
        return player + "-" + computer + " player wins"
    } else if (player == "scissors" && computer == "rock") {
        return player + "-" + computer + " computer wins"
    } else if (player == "scissors" && computer == "paper") {
        return player + "-" + computer + " player wins"
    } else if (player == "paper" && computer == "scissors") {
        return player + "-" + computer + " computer wins"
    } else {
        return "choose a valide option"
    }
    
}

const getComputer = getComputerChoice();

function game() {
    for(i = 0;i < 5; i++){
        console.log(playRound(prompt("Choose"), getComputer));
    }
}

game()