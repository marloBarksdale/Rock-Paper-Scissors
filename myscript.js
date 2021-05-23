


let compWins = 0;
let manWins = 0;



while (compWins < 5 && manWins < 5) {

    let yourChoice = prompt("Enter rock,paper or scissors");

    yourChoice = yourChoice.toLowerCase();

    game("scissors", yourChoice);

    score();
}

function score(){

    console.log("Man Score:" + manWins);
    console.log("Computer Score:" + compWins);

} 

function game(computer, man){

    //console.log(computer);
    
    if(computer === man){
        console.log("Its a tie");
        console.log("Both selected " + computer);
        return;
    }
    
     if(computer==="rock" && man !== "paper"){

        compWins++;
        console.log("Computer wins");
        console.log(computer + "beats " + man);
    }else if(computer ==="paper" && man!= "scissors"){
        compWins++
        console.log("Computer  wins");
        console.log(computer + " beats " + man);

    }
    else if(computer === "scissors" && man!= "rock"){
        compWins++;
        console.log("Computer wins");
        console.log(computer + " beats " + man);

    }else{
        console.log("Man wins");
        manWins++;
        console.log(man + " beats " + computer);
    }

}





function compChoice() {

    let choice = ["rock", "paper", "scissors"];

    return (choice[Math.floor(Math.random() * 3)]);
}


