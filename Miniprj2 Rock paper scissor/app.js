// let rock = document.querySelector("#rock");
// let paper = document.querySelector("#paper");
// let scissor = document.querySelector("#scissor");

let yourScore = 0 ;
let compScore = 0 ;
let result = document.getElementById("result");

let you = document.querySelector("#yourScore");
let computer = document.querySelector("#compScore");
let msg = document.querySelector("#msg");

const genComputerChoise = () => {

    const options = ["rock", "paper", "scissor"];
    let idx = Math.floor(Math.random() * 3);
    return options[idx];
}

const drawMatch = () => {
    result.style.backgroundColor = "yellow";
    result.innerText = "The Game is Draw";
    result.classList.remove("hide");
    result.classList.add("result")
};

const winMatch = () => {
    result.style.backgroundColor = "green";
    result.innerText = "You Won the game";
    result.classList.remove("hide");
    result.classList.add("result");
    yourScore += 1;
    you.innerText = yourScore;
};

const loseMatch = () => {
    result.style.backgroundColor = "red";
    result.innerText = "Computer won, Please try again !!!";
    result.classList.remove("hide");
    result.classList.add("result");
    compScore += 1;
    computer.innerText = compScore;
};

const showChoise = (compChoise, userChoise) => {

    msg.innerHTML = `<h2>Your Choise is ${userChoise}</h2> <h2>Computer Choise is ${compChoise}</h2>`;
};

const playGame = (userChoise) => {

    const compChoise = genComputerChoise();
    console.log("user = ", userChoise);
    console.log("comp = ", compChoise);

    if(userChoise === compChoise){

       showChoise(compChoise, userChoise);
       drawMatch();
    }

    else if(userChoise === "rock" && compChoise === "paper"){
        showChoise(compChoise, userChoise);
        loseMatch();
    }

    else if(userChoise === "rock" && compChoise === "scissor"){
        showChoise(compChoise, userChoise);
        winMatch();
    }

    else if(userChoise === "paper" && compChoise === "rock"){
        showChoise(compChoise, userChoise);
        winMatch();
    }

    else if(userChoise === "paper" && compChoise === "scissor"){
        showChoise(compChoise, userChoise);
        loseMatch();
    }

    else if(userChoise === "scissor" && compChoise === "paper"){
        showChoise(compChoise, userChoise);
        winMatch();
    }

    else if(userChoise === "scissor" && compChoise === "rock"){
        showChoise(compChoise, userChoise);
        loseMatch();
    }
};

let choises = document.querySelectorAll(".choise");

choises.forEach((choise) => {
       
    choise.addEventListener("click", () => {

        result.classList.add("hide");
        let userChoise = choise.getAttribute("id");
        playGame(userChoise);

    });
});