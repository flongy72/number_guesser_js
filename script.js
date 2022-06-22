let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget () {
    return Math.floor(Math.random() * 10)
}

function compareGuesses (human, computer, target) {
    const human_diff = Math.abs(target-human);
    const computer_diff = Math.abs(target-computer);
    return human_diff <= computer_diff;
}

function updateScore (winner) {
    if (winner === "human") {
        humanScore += 1
    } else if (winner === "computer") {
        computerScore += 1
    }
}

function advanceRound () {
    currentRoundNumber += 1
}

