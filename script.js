//function for the computer choice
function getComputerChoice(){

const list = ["rock", "paper", "scissor"];
const index = Math.floor(Math.random() * list.length);
return list[index];
}
//function for the human choice
function getHumanChoice(){
    const message = prompt("Write something").toLowerCase();

    if (message === "rock"|| message === "paper" || message === "scissor"){
        return message;
    }else {
        return null;
    }
}
//Function for do the validation
function playRound(computerChoice, humanChoice){
    computerChoice = computerChoice.toLowerCase();
    humanChoice = humanChoice.toLowerCase();
    const validOption = ["rock", "paper", "scissor"];

   if (!validOption.includes(computerChoice) || !validOption.includes(humanChoice)){
    return "Invalid options";
}

   if (computerChoice === humanChoice){
    return "It is a tie!!";
   }else if ((computerChoice == "paper" && humanChoice === "rock" ) 
            || (computerChoice === "scissor" && humanChoice === "paper" ) 
            || (computerChoice === "rock" && humanChoice === "scissor")){
    return "Computer wins";
   }else {
    return "Human wins";
   }
}
//Function for 5 round and decide who is the winner
function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    for(let i=1;i<=5;i++){
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        console.log(+i+" Round");
        console.log("Computer: "+computerChoice);
        console.log("Human: "+humanChoice);
        console.log("\n");

        if (humanChoice === null){
            console.log("Invalid human choice. The round was skipped");
            continue;
        }
        const result = playRound(computerChoice, humanChoice);

        if(result === "Computer wins"){
            computerScore++;
        } else if (result === "Human wins" ){
            humanScore++;
        }
    }
    console.log("The Computer score is: "+computerScore +" And Human score is: "+humanScore);
    if (computerScore > humanScore){
        return "Computer is the winner";
    } else if (humanScore > computerScore){
        return "Human is the winner";
    }else {
        return "It's a tie!";
    }
}
console.log(playGame());