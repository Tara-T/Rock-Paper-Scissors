let bot = 0;
let player = 0;


const options = document.querySelectorAll(".options")

options.forEach((option) => {
    option.addEventListener("click", function () {
        const pInput = this.getAttribute("id");

        this.style.border = "black 1px solid"; //TO DO: change this so other elements dissapear

        const cOptions = ["Rock", "Paper", "Scissors"];
        const cInput = cOptions[Math.floor(Math.random() * 3)];

        compareImp(pInput, cInput);
        console.log(pInput , cInput);
        console.log(bot, player);
        
    });
});


//setTimeout(() => console.log("I will run every second"), 1000) //Make a timer

function compareImp(pInput, cInput) {
    const currentMatch = `${pInput} vs ${cInput}`


    if (pInput === cInput) {
        document.getElementById('result').innerHTML = "its a tie";
        return;
    }

    if (pInput == "Rock" && cInput == "Scissors" || pInput == "Scissors" && cInput == "Paper" || pInput == "Paper" && cInput == "Rock") {
        document.getElementById('result').innerHTML = "You win";
        player+=1;
    }
    else if (pInput == "Scissors" && cInput == "Rock" || pInput == "Paper" && cInput == "Scissors" || pInput == "Rock" && cInput == "Paper") {
        document.getElementById('result').innerHTML = "You lose";
        bot+=1;
    }


}