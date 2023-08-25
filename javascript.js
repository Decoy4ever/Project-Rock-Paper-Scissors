// select the button
// use for each method to iterate through each button
// for each one we add a 'click' listener to the playRound() with the correct playerSelection
function playGame(){
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
}

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
    const btn = document.querySelectorAll(".selectButton");
    const divMessage = document.createElement('div');

    // Use an if statement to show possible conditions if the player won
    if(playerSelection === "Rock" && computerSelection === "Scissors" ||
        playerSelection === "Scissors" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerSelection === "Rock")
    {
        playerScore++;
        const msg = document.createTextNode("Player Has Won. P: " + playerScore + ' C: ' + computerScore);
        btn.appendChild(divMessage).appendChild(msg);
    }
    else if(computerSelection === "Rock" && playerSelection === "Scissors" ||
            computerSelection === "Scissors" && playerSelection === "Paper" ||
            computerSelection === "Paper" && playerSelection === "Rock" )
    {
        computerScore++;
        const msg = document.createTextNode("Comp Has Won. P:" + playerScore + ' C: ' + computerScore);
        btn.appendChild(divMessage).appendChild(msg);
    }
    else if(playerSelection === computerSelection)
    {
        playerScore++;
        computerScore++;
        const msg = document.createTextNode("It's a Tie!. P: " + playerScore + ' C: ' + computerScore );
        btn.appendChild(divMessage).appendChild(msg);
    }
    winnerGame();
}

function winnerGame()
{
    const btn = document.querySelectorAll(".selectButton");
    const div = document.createElement('div');

    if(playerScore === 5)
    {
        const winnerMsg = document.createTextNode("Player is the Overall Winner");
        btn.appendChild(div).appendChild(winnerMsg);
    }
    else if(computerScore === 5)
    {
        const winnerMsg = document.createTextNode("Computer is the Overall Winner");
        btn.appendChild(div).appendChild(winnerMsg);
    }
}

playGame();
