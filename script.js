//Set player and computer scores
var playerScore = 0;
var computerScore = 0;
var draws = 0;

//Set an array for the computer
var options = ["rock", "paper", "scissors"];

//set function to play 
function play() {
    if (playerChoice == "rock" && computerChoice == "paper" || playerChoice == "paper" && computerChoice == "scissors" || playerChoice == "scissors" && computerChoice == "rock") {
        alert(`You chose ${playerChoice} and the computer chose ${computerChoice}, computer wins!`);
        computerScore++;
    } else if (playerChoice == "rock" && computerChoice == "scissors" || playerChoice == "paper" && computerChoice == "rock" || playerChoice == "scissors" && computerChoice == "paper") {
        alert(`You chose ${playerChoice} and the computer chose ${computerChoice}, you win!`);
        playerScore++;
    } else {
        alert(`You chose ${playerChoice} and the computer chose ${computerChoice}, its a draw!`);
        draws++;
    }
}

// for loop so that 10 games are played.
for (let i = 0; i < 10; i++) {

    //Prompt player to make their choice and assign it to variable
    var playerChoice = prompt("rock, paper, scissors?");

    // WHile loop to keep validating user input.
    while (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors") {
        playerChoice = prompt("Invalid choice, please try again!\nrock, paper, scissors?");
    }

    var randomChoice = Math.floor(Math.random() * options.length);
    var computerChoice = options[randomChoice];

    play();

}

alert(`The final scores are:\n Player: ${playerScore}\n Computer: ${computerScore}\n Draws: ${draws}`)
