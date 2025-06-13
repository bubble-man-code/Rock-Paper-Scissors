/* my personal atmpet
// function getComputerChoice() {
    //returning either "rock","paper","scissors"
    //creating choices
    const rock = "rock"
    const paper ="paper"
    const scissors = "scissors"
    //randomly pikcing one
    function getRandomInt() {
  return Math.floor(Math.random() * 3)}
    if (getRandomInt() === 0){
        return rock
    }else if (getRandomInt() === 1 ){
        return paper
    }else{
        return scissors
    }
    //return it
} */

//the better version
function getComputerChoice(){
    choices =["rock","paper","scissors"];
    return choices[Math.floor(Math.random()*3)]
}

function getHumanChoice(){
return prompt("Choose Rock,Paper or Scissors")
}
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
humanChoice = humanChoice.toLowerCase()
if (humanChoice === computerChoice){
console.log("draw")
}else if ((humanChoice == "rock" && computerChoice =="paper")||
          (humanChoice == "paper" && computerChoice =="scissors")||
          (humanChoice == "scissors" && computerChoice =="rock")
){
    console.log("pc won")
    computerScore ++
    console.log(computerScore)
}else{console.log("human won")
        humanScore ++
    console.log(humanScore)
}
}
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

pglayRound(humanSelection, computerSelection);