// 1. Create a function called getComputerChoice that handles the computer inputs random choice between Rock, Paper and
// Scissors

function getComputerChoice()
{
    // create an array that stores the choices
    let choice = ["Rock", "Paper", "Scissors"];

    // create a variable called index that determines the index position in the choice array
    let index = Math.floor(Math.random()*choice.length);

    // create a var called randomGame that stores the computer choice at the random index position
    let randomGame = choice[index];

    // print out choice of the computer
    // console.log(randomGame);
    console.log(randomGame);
}


// 2. Function called playRound that take two arguments playerSelection and computerSelection and plays a single round of
// Rock, Paper and Scissors game.

function playRound(playerSelection, computerSelection)
{
    // Use a if statement to show possible conditions
    // if (Rock > Scissors) print winner
    if(playerSelection === "Rock" && computerSelection === "Scissors")
    {
        console.log("Player Wins! Paper beats Rock")
    }
    // if(Scissors > Paper ) print winner
    else if(playerSelection === "Scissors" && computerSelection === "Paper")
    {
        console.log("Player Wins! Scissors beat Paper")
    }
    // if(Paper > Rock) print winner
    else if(playerSelection === "Paper" && computerSelection === "Rock")
    {
        console.log("Player Wins! Paper beat Rock")
    }
    else if(playerSelection === "Paper" && computerSelection === "Paper" || playerSelection === "Rock" && computerSelection === "Rock" || playerSelection === "Scissors" && computerSelection === "Scissors")
    {
        console.log("Its a tie");
    }
}

// 3. Print out choice of computer
const computerSelection = getComputerChoice();
console.log("Computer choice: " + computerSelection)

// 4. Print out choice of player
const playerSelection = "Rock";
console.log("Player choice: " + playerSelection)

// 5. Print out the winner of the game
console.log(playRound(playerSelection, computerSelection));