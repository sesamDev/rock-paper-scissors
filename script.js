let choices = ["Rock", "Paper", "Scissors"]
let playerScore = 0
let computerScore = 0

function computerPlay(){
    return choices[randomIntFromInterval(0,choices.length - 1)]
}

function randomIntFromInterval(min, max){
    return Math.floor(Math.random() * (max -  min + 1)) + min
}

function playerChoise(){
    return prompt("Please enter your selection, Rock, Paper or Scissors").toLowerCase()
}

function playRound(playerSelection, computerSelection){
    let playerChoise = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    let computerChoice = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    let winner = ""

    if(playerChoise == "Rock" && computerChoice == "Scissors"){
        console.log(`You win! ${playerChoise} beats ${computerChoice}`)
        return winner = "Player"
    }else if(playerChoise == "Scissors" && computerChoice == "Paper"){
        console.log(`You win! ${playerChoise} beats ${computerChoice}`)
        return winner = "Player"
    }else if(playerChoise == "Paper" && computerChoice == "Rock"){
        console.log(`You win! ${playerChoise} beats ${computerChoice}`)
        return winner = "Player"
    }else if(playerChoise == computerChoice){
        console.log(`It's a tie! You both chose ${playerChoise}`)
        return winner = "Tie"
    }
    else{
        console.log(`You lose! ${computerChoice} beats ${playerChoise}`)
        return winner = "Computer"
    }

}

// function game(){
//     let playerScore = 0
//     let computerScore = 0
//     for (let i = 0; i < 5; i++) {
//         let winner = playRound(playerChoise(), computerPlay())
//         if(winner == "Player"){
//             playerScore++
//         }else if(winner == "Computer"){
//             computerScore++
//         }else{
//             playerScore = playerScore
//             computerScore = computerScore
//         }
//     }
//     if (playerScore>computerScore){
//         console.log(`You win! You scored ${playerScore} and the computer scored ${computerScore}`)
//     }else{
//         console.log(`You lose! You scored ${playerScore} and the computer scored ${computerScore}`)
//     }
// }

// game()

//UI Logic
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', function(e){
        playRound(e.target.innerText, computerPlay())
    })
})

