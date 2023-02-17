# Project-Rock-Paper-Scissors

Description
In this project we are going to create a simple implementation of the game "Rock Paper Scissors".
The game will be played through the browser console however this project will be revisited to incorporate a 
Graphical User Interface (GUI).

Understanding the Problem
* Both the User and Computer will have 3 options to play: Rock, Paper, Scissors
* The User or Computer will win in this following situation
  1. Rock > Scissors > Paper (">" means beat)
  Provided that the User or Computer selects a different choice
* Example: Consider this scenario
  * User: Rock 
  * Computer: Paper
  * Winner: Computer (since Paper beats Rock)
* If both users selects the same option it is a tie


Planning
* Write a program that simulates the Rock, Paper and Scissors game.
* Possible game outcomes are shown below

Rock > Scissors
Scissors > Paper
Paper > Rock


Questions 
Q1: Does your program have a user interface? What will it look like? 
    What functionality will the interface have? Sketch this out on paper

Ans: Not yet it won't the simple implementation will use the browser console, however it will be revisited to use
     a GUI.

Q2: What inputs will your program have? Will the user enter data or will you get input from somewhere else?

Ans: The computer will randomly select  "Rock" "Paper" or "Scissors" from the rand() and be stored in a function
     called getComputerChoice(). The user will enter their choice through prompt() method.

Q3: What the desired output?
Ans: Desired Output is where the playerSelection and Computer selection returns a string that declares the winner of the 
round example: "You Lose! Paper beats Rock"

Q4: Given your inputs, what are the steps necessary to return the desired output?

PseudoCode
1. Create a function called getComputerChoice that handles the computer inputs random choice between Rock, Paper and 
   Scissors
2. Function called playRound that take two arguments playerSelection and computerSelection and plays a single round of
   Rock, Paper and Scissors game.
   Use a if statement to show possible conditions
   if (Rock > Scissors) print winner
   if(Scissors > Paper ) print winner
   if(Paper > Rock) print winner
3. Print out choice of computer
4. Print out choice of player
5. Print out the winner of the game
