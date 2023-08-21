// select the button
// use for each method to iterate through each button
// for each one we add a 'click' listener to the playRound() with the correct playerSelection
const btn = document.querySelectorAll('.selectButton');
btn.forEach((button) => {
   button.addEventListener('click',function(){
       // if the user selected the
       let playerChoice = "Rock";
       if(playerChoice)
       {
           playRound(playerChoice, getComputerChoice());
       }
       else if(playerChoice === "Paper")
       {
           playRound(playerChoice,getComputerChoice());
       }
       else if(playerChoice === "Scissors")
       {
           playRound(playerChoice, getComputerChoice());
       }
   });
});

// 1. Create a function called getComputerChoice that handles the computer inputs random choice between Rock, Paper and
function getComputerChoice()
{
    // create an array that stores the choices
    let choice = ["Rock", "Paper", "Scissors"];

    // create a variable called index that determines the index position in the choice array
    let index = Math.floor(Math.random()*choice.length);

    // create a var called randomGame that stores the computer choice at the random index position
    return choice[index];
}


// 2. Function called playRound that take two arguments playerSelection and computerSelection and plays a single round of
// Rock, Paper and Scissors game.

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection)
{
    // Use an if statement to show possible conditions if the player won
    if(playerSelection === "Rock" && computerSelection === "Scissors")
    {
        playerScore++;
        console.log( "Player Wins! Rock beats Scissors. Current score is Player: " + playerScore + " Computer Score: " + computerScore);
    }
    else if(playerSelection === "Scissors" && computerSelection === "Paper")
    {
        playerScore++;
        console.log("Player Wins! Scissors beat Paper Current score is Player: " + playerScore + " Computer Score: " + computerScore);
    }
    else if(playerSelection === "Paper" && computerSelection === "Rock")
    {
        playerScore++;
        console.log("Player Wins! Paper beat Rock Current score is Player: " + playerScore + " Computer Score: " + computerScore);
    }
    else if(computerSelection === "Rock" && playerSelection === "Scissors")
    {
        computerScore++;
        console.log("Computer Wins! Rock beats Scissors Current score is Player: " + playerScore + " Computer Score: " + computerScore);
    }
    else if(computerSelection === "Scissors" && playerSelection === "Paper")
    {
        computerScore++;
        console.log("Computer Wins! Scissors beat Paper. Score is Player Current score is Player: " + playerScore + " Computer Score: " + computerScore);
    }
    else if(computerSelection === "Paper" && playerSelection === "Rock")
    {
        computerScore++;
        console.log("Computer Wins! Paper beat Rock Current score is Player: " + playerScore + " Computer Score: " + computerScore);
    }
    else if(playerSelection === computerSelection)
    {
        playerScore++;
        computerScore++;
        console.log("Its a tie. Current Score is Player: " + playerScore + " Computer Score: "+ computerScore);
    }
}

// function to create a new winner
function winnerGame()
{
    if(playerScore > computerScore)
    {
        console.log("\n The Player has Won the game");
    }
    else if(playerScore < computerScore)
    {
        console.log("\n The Computer has Won the game");
    }
    // else if(playerScore === computerScore)
    // {
    //     console.log("Its a Tie!. Thank you for playing");
    // }
}

// 5. game function used to play a number of games
function game()
{
    // for(let i = 0; i<5; i++)
    // {
    //     // 3. Print out choice of computer
    //     const computerSelection = getComputerChoice();
    //     console.log("Computer choice is: " + computerSelection);
    //
    //     // 4. Print out choice of player
    //     const playerSelection = prompt("The choice you played is ");
    //     console.log("Player choice is: " + playerSelection);
    //
    //     playRound(playerSelection, computerSelection);
    //     console.log("\n");
    // }
    // print winner of game
    winnerGame();
}

game();


