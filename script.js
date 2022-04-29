let choices = ["Rock", "Paper", "Scissors"]
let playerScore = 0
let computerScore = 0

//UI Logic variables
const buttons = document.querySelectorAll('.button');

//Creating
let playerScoreText = document.querySelector('.score-text.player> div');
let computerScoreText = document.querySelector('.score-text.computer> div');


function computerPlay(){
    return choices[randomIntFromInterval(0,choices.length - 1)]
}

function randomIntFromInterval(min, max){
    return Math.floor(Math.random() * (max -  min + 1)) + min
}

function checkWinner(player, computer){
    //Check to see winner
    if(player == "Rock" && computer == "Scissors" || 
    player == "Scissors" && computer == "Paper" ||
    player == "Paper" && computer == "Rock"){
        return "Player";
    }else if(player === computer){
        return "Tie";
    }else{
        return "Computer"
    }
}

function updateScore(roundWinner){
    if(roundWinner == "Player") return playerScore++;;
    if(roundWinner == "Computer") return computerScore++;
    if(roundWinner == "Tie") return console.log("It's a Tie! No points!");
}

function playRound(playerSelection, computerSelection){
    let playerChoise = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    let computerChoice = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)

    updateScore(checkWinner(playerChoise, computerChoice));
    console.log("Score Player: " + playerScore + " Computer:" + computerScore);

}


//UI Logic
buttons.forEach(button => {
    button.addEventListener('click', function(e){
        playRound(e.target.innerText, computerPlay());
        playerScoreText.textContent = playerScore;
        computerScoreText.textContent = computerScore;

    })
})

