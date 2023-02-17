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
    console.log(randomGame);
}

getComputerChoice()


// 2. Function called playRound that take two arguments playerSelection and computerSelection and plays a single round of
// Rock, Paper and Scissors game.
//     Use a if statement to show possible conditions
// if (Rock > Scissors) print winner
// if(Scissors > Paper ) print winner
// if(Paper > Rock) print winner


// 3. Print out choice of computer
// 4. Print out choice of player
// 5. Print out the winner of the game