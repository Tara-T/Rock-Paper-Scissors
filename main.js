let bot = 0;
let player = 0;
let timeLeft = 3;
let timer;
let pInput;
let cInput;
const options = document.querySelectorAll(".options")
const botOptions = document.querySelectorAll('.bot-option')
let score = document.getElementById("score");
let startBtn = document.getElementById("start");
let time = document.getElementById("timer");
let result = document.getElementById("result");

function pick() { //this needs a better name
    options.forEach((option) => {
        option.addEventListener("click", function () {
            pInput = this.getAttribute("id");

            this.style.border = "black 1px solid"; //TODO: change this so other elements dissapear

            const cOptions = ["Rock", "Paper", "Scissors"];
            cInput = cOptions[Math.floor(Math.random() * 3)];

            border(cInput)

            clearInterval(timer)

            checkTime();
            console.log(timeLeft)


            score.innerHTML = `${player} vs ${bot}`;

            console.log(pInput, cInput);
            console.log(player, bot);

        });
    })
};

function border(cInput) { //making a full finction just to put a border >:(

    switch (cInput) {
        case "Rock":
            document.getElementById("cRock").style.border = "solid 1px black"
            break;
        case "Paper":
            document.getElementById("cPaper").style.border = "solid 1px black"
            break;
        case "Scissors":
            document.getElementById("cScissors").style.border = "solid 1px black"
            break;
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

function getTime() {
    timer = setInterval(function () {
        if (timeLeft <= 0) {
            clearInterval(timer);
        }
        time.innerHTML = timeLeft;
        timeLeft -= 1;
    }, 1000);
}

function checkTime() {
    switch (timeLeft) {
        case 0:
            bot++;
            result.innerHTML = "Too late"
            break;
        case 1:
            console.log("case 1")
            compareImp(pInput, cInput)
            
            break;
        case 2:
        case 3:
            bot++;
            result.innerHTML = "Too early"
            break;
    }
}

function game() {
    // while (bot != 3 && player != 3) maybe a for loop is better 
    startBtn.style.display = 'none';
    time.style.display = 'block';
    getTime(); //TODO fix delay 
    pick();


}

startBtn.addEventListener('click', game);