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
    choices =["Rock","Paper","Scissors"];
    return choices[Math.floor(Math.random()*3)]
}