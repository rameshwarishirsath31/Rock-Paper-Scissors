let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");

let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");

let userscore = 0;
let compscore = 0;

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () =>{
    msg.innerText = "Game was Draw. Play again to win.";
    msg.style.backgroundColor ="#16404D";
};

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userscore++;
        userScore.innerText = userscore;
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compScore.innerText = compscore;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) =>{

    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            // paper, scissors
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            // rock, scissor
            userWin = compChoice === "scissors" ? false : true;
        }else{
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});