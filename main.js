let bot = 0;
let player = 0;
const options = document.querySelectorAll(".options")
const botOptions = document.querySelectorAll('.bot-option')
let score = document.getElementById("score");
let startBtn = document.getElementById("start");
let timer = document.getElementById("timer");
let result = document.getElementById("result");

function pick() {
    options.forEach((option) => {
        option.addEventListener("click", function game() {
            const pInput = this.getAttribute("id");

            this.style.border = "black 1px solid"; //TODO: change this so other elements dissapear

            const cOptions = ["Rock", "Paper", "Scissors"];
            const cInput = cOptions[Math.floor(Math.random() * 3)];

            border(cInput)
            
            
            compareImp(pInput, cInput)
            score.innerHTML = `${player} vs ${bot}`; 

            console.log(pInput, cInput);
            console.log(bot, player);

        });
    })
};

function border(cInput) { //making a full finction just to put a border >:(
        if (cInput == "Rock") {
            document.getElementById("cRock").style.border = "solid 1px black"
        }
        else if (cInput == "Paper") {
            document.getElementById("cPaper").style.border = "solid 1px black"
        }
        else if (cInput == "Scissors"){
            document.getElementById("cScissors").style.border = "solid 1px black"
        }
    };
        



function compareImp(pInput, cInput) {


    if (pInput === cInput) {
        result.innerHTML = "It's a tie";
    }

    if (pInput === "Rock" && cInput === "Scissors" || pInput === "Scissors" && cInput === "Paper" || pInput === "Paper" && cInput === "Rock") {
        result.innerHTML = "You win";
        player++;
    }
    else if (pInput === "Scissors" && cInput === "Rock" || pInput === "Paper" && cInput === "Scissors" || pInput === "Rock" && cInput === "Paper") {
        result.innerHTML = "You lose";
        bot++;
    }


}
let timeLeft = 3;

function getTime() {
    let timer = setInterval(function () {
        if (timeLeft <= 0) {
            clearInterval(timer);
        }
        document.getElementById('timer').innerHTML = timeLeft;
        timeLeft -= 1;
    }, 1000);
}


startBtn.addEventListener('click', game);

function game() { 
   // while (bot != 3 && player != 3) maybe a for loop is better 
    startBtn.style.display = 'none';
    timer.style.display = 'block';
    getTime(); //TODO fix delay
    pick()
   
   
}

    

