let bot = 0;
let player = 0;
let timeLeft = 4;
let timer;
let pInput;
let cInput;
const options = document.querySelectorAll(".options")
const startBtn = document.getElementById("start");
const time = document.getElementById("timer");

function click() {
    pInput = this.getAttribute("id");

    this.style.border = "black 1px solid"; //TODO: change this so other elements dissapear

    const cOptions = ["Rock", "Paper", "Scissors"];
    cInput = cOptions[Math.floor(Math.random() * 3)];

    border(cInput)

    clearInterval(timer)

    checkTime();

    const score = document.getElementById("score");
    score.innerHTML = `${player} vs ${bot}`;

    console.log(pInput, cInput);
    console.log(player, bot);

};

function pick() {
    return new Promise((res) => {
        options.forEach((option) => {
            option.addEventListener("click", function () { click.call(this); res(); })
        })
    })
}


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
            timeLeft -= 1;
            time.innerHTML = timeLeft;
        }, 1000);
    }

    function checkTime() {
        let result = document.getElementById("result");
        switch (timeLeft) {
            case 0:
                bot++;
                result.innerHTML = "Too late"
                break;
            case 1:
                compareImp(pInput, cInput)
                break;
            case 2:
            case 3:
                bot++;
                result.innerHTML = "Too early"
                break;
        }
    }

    async function game() {
        startBtn.style.display = 'none';
        time.style.display = 'block';

        for (let i = 0; i < 3; i++) {
            timeLeft = 4;
            getTime(); //TODO fix delay 
            await pick()
        };
    }

    startBtn.addEventListener('click', game);