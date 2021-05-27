


let compWins = 0;
let manWins = 0;



manscore = document.querySelector('#playerScore');
x = document.createElement('h1');
manscore.appendChild(x);


compScore = document.querySelector('#computerScore');
y = document.createElement('h1');
compScore.appendChild(y);

let yourChoice = null;




const inputs = document.querySelectorAll('input');
inputs.forEach((input) => {

    // and for each one we add a 'click' listener
    input.addEventListener('click', () => {

        if (input.value === "Reset") {

            resetGame();
            console.log("New Game!!!!!!!!")
            return;
        }

        yourChoice = input.value.toString().trim();


        yourChoice = yourChoice.toLowerCase();

        play(compChoice(), yourChoice)


    });
});


function resetGame() {
    manWins = 0;
    compWins = 0;


location.reload();

    manscore.appendChild(x);

    compScore.appendChild(y);


    score();
}




function play(computer, man) {

    if (compWins >= 5 || manWins >= 5) {


        checkWinner();
        console.log("Game over")
        return;

    }


    game(computer, yourChoice);


    score();




}

winnerCheck = false;

function checkWinner() {


    if (winnerCheck === true) {
        return;
    }

    container = document.querySelector('#scoreBoard');
    winner = document.createElement('h1');
    player = document.querySelector('#playerScore');
    comp = document.querySelector("#computerScore");

    comp.textContent = "";
    player.textContent = "";




    if (manWins === 5) {
        winner.textContent = ("You win");
    }
    else {
        winner.textContent = ("You Lost");
    }



    container.appendChild(winner);
    winnerCheck = true;
}

function score() {



    x.textContent = manWins;


    y.textContent = compWins;






    console.log("Man Score:" + manWins);
    console.log("Computer Score:" + compWins);

}

function game(computer, man) {

    //console.log(computer);

    if (computer === man) {
        console.log("Its a tie");
        console.log("Both selected " + computer);
        return;
    }

    if (computer === "rock" && man !== "paper") {

        compWins++;
        console.log("Computer wins");
        console.log(computer + " beats " + man);
    } else if (computer === "paper" && man != "scissors") {
        compWins++
        console.log("Computer  wins");
        console.log(computer + " beats " + man);

    }
    else if (computer === "scissors" && man != "rock") {
        compWins++;
        console.log("Computer wins");
        console.log(computer + " beats " + man);

    } else {
        console.log("Man wins");
        manWins++;
        console.log(man + " beats " + computer);
    }

}


function compChoice() {

    let choice = ["rock", "paper", "scissors"];

    return (choice[Math.floor(Math.random() * 3)]);
}


