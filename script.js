let choices = ["Rock", "Paper", "Scissors"]
let playerScore = 0;
let computerScore = 0;
let roundTextContent = '';
let gameOver = false;
let winner = ''
//UI variables
const buttons = document.querySelectorAll('.button');

//Reference DOM elements
let playerScoreText = document.querySelector('.score-text.player> div');
let computerScoreText = document.querySelector('.score-text.computer> div');
let roundText = document.querySelector('#round-text');


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
    if(roundWinner == "Player"){
        playerScore++;
        return roundWinner;
    } 
    if(roundWinner == "Computer"){
        computerScore++;
        return roundWinner;
    }
    if(roundWinner == "Tie") return roundWinner;
}

function updateRoundTextContent(winner, playerChoise, computerChoice){
    if(winner == "Player") return `You won! ${playerChoise} beats ${computerChoice}!`;
    if(winner == "Computer") return `You lost.. ${computerChoice} beats ${playerChoise}`;
    if(winner == "Tie") return `It's a tie, you both played ${playerChoise}`;
}

function playRound(playerSelection, computerSelection){
    return updateScore(checkWinner(playerSelection, computerSelection));
}
function click(e = new Event()){
    let computerChoice = computerPlay();
    let roundWinner = playRound(e.target.innerText, computerChoice);
    
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;

    roundText.textContent = updateRoundTextContent(roundWinner, e.target.innerText, computerChoice);

    if(playerScore >=5 || computerScore >= 5){
        if(playerScore>computerScore){
            winner = "Player"
        }else{
            winner = "Computer"
        }
        roundText.textContent = `The winner is ${winner}!`;
        buttons.forEach(button => {
            button.removeEventListener('click', click)
        })
    }
}


buttons.forEach(button => {
    button.addEventListener('click', click);
})

