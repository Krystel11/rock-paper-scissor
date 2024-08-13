const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let computerScore = 0;
let playerScore = 0;  

function getComputerChoice(){
const list = ["rock", "paper", "scissor"];
const index = Math.floor(Math.random() * list.length); //Choice a random index and print it
return list[index];
}

function playRound(playerChoice ){
    const computerChoice = getComputerChoice();
    let result = '';    
       if (computerChoice === playerChoice){
        result = "It's a tie!";
       }else if ((computerChoice == "paper" && playerChoice === "rock" ) 
                || (computerChoice === "scissor" && playerChoice === "paper" ) 
                || (computerChoice === "rock" && playerChoice === "scissor")){
            computerScore++;
            result = 'You lose';
       }else {
            playerScore++;
            result = 'You win';
       }
playerDisplay.textContent = `Player: ${playerChoice}`;
computerDisplay.textContent = `Computer: ${computerChoice}`;
resultDisplay.textContent = result;
resultDisplay.classList.remove('greenText', 'redText');

playerScoreDisplay.textContent = playerScore;
computerScoreDisplay.textContent = computerScore;

if (computerScore === 5){
    result ='';
    result= 'Computer wins!';
    resultDisplay.textContent = result;
    resultDisplay.classList.add('redText');
    resetGame();
}else if (playerScore === 5){
    result = '';
    result = 'Player wins!';
    resultDisplay.textContent = result;
    resultDisplay.classList.add('greenText');
    resetGame()
}
}
function resetGame(){
    playerScore = 0;
    computerScore =0;
}







