// GLOBALS
var playerScore = 0;
var computerScore = 0;

// html items
//let playerSelection = document.getElementById('player').value;
const btn = document.querySelector('button');
const playerSelection = document.getElementById("choice").value;
const scores = document.getElementById('scores')
btn.addEventListener('click', () => game(playerPlay(), computerPlay()));
let resultMessage = document.getElementById('result');
let valids = ['rock', 'paper', 'scissor'];

function playerPlay(playerSelection) {
    playerSelection = document.getElementById('choice').value.toLowerCase();
    if(valids.indexOf(playerSelection) == -1){
      resultMessage.innerText = "Please select 'rock', 'paper', or 'scissor'"
      return('None')
    }
    return(playerSelection);
}

function computerPlay() {
    // generate random number between 1 and 3
    let choice = Math.floor((Math.random() * 3) + 1);
    // depending and integer 1:3, generate computer choice
    if(choice == 1){
        choice = 'rock';
    } else if(choice == 2){
        choice = 'paper';
    } else if(choice == 3){
        choice = 'scissor';
    }
    return(choice);
}
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
    // get player selection
    let player = playerSelection;
    if(player == 'None'){
      return('None');
    }
    // logic for results
    if(player == 'rock'){
        if(computerSelection == 'rock'){
            return(0);
        } else if(computerSelection == 'paper'){
            return(-1);
        } else if(computerSelection == 'scissor'){
            return(1);
        }
    } else if(player == 'paper'){
        if(computerSelection == 'rock'){
            return(1);
        } else if(computerSelection == 'paper'){
            return(0);
        } else if(computerSelection == 'scissor'){
            return(-1);
        }
    } else if(player == 'scissor'){
        if(computerSelection == 'rock'){
            return(-1);
        } else if(computerSelection == 'paper'){
            return(1);
        } else if(computerSelection == 'scissor'){
            return(0)
        }
    }
  };
function game(playerSelection, computerSelection) {
    // play game
    let result = playRound(playerSelection, computerSelection)

    if(result == 'None'){
      return(`Need to choose a valid input\n
        Player Score: ${playerScore} Computer Score: ${computerScore}`);
    }
    // update scores and return results
    if(result == 1){
        playerScore += result;
        //check result
        if(playerScore == 5){
            playerScore = 0;
            computerScore = 0;
            result.innerText = `You Win! You won 5 times!`
            scores.innerText = `Player: ${playerScore} Computer: ${computerScore}`
            return(`You Win! You won 5 times!\nPlayer: ${playerScore} Computer: ${computerScore}`)
        }
        resultMessage.innerText = `You Win! ${playerSelection} beats ${computerSelection}`
        scores.innerText = `Player: ${playerScore} Computer: ${computerScore}`
        return(`You Win! ${playerSelection} beats ${computerSelection}\n
        Player Score: ${playerScore} Computer Score: ${computerScore}`);
    }
    else if(result == -1){
        computerScore += 1;
        //check result
        if(computerScore == 5){
            playerScore = 0;
            computerScore = 0;
            resultMessage.innerText = `You Lose! The computer won 5 times`
            scores.innerText = `Player: ${playerScore} Computer: ${computerScore}`
            return(`You Lose! The computer won 5 times\nPlayer: ${playerScore} Computer: ${computerScore}`)
        }
        resultMessage.innerText = `You Lose! ${computerSelection} beats ${playerSelection}`
        scores.innerText = `Player: ${playerScore} Computer: ${computerScore}`

        return(`You Lose! ${computerSelection} beats ${playerSelection}\n
        Player Score: ${playerScore} Computer Score: ${computerScore}`);
    }
    else if(result == 0){
        resultMessage.innerText = `Tie!`
        scores.innerText = `Player: ${playerScore} Computer: ${computerScore}`
        return(`Tie!\n
        Player Score: ${playerScore} Computer Score: ${computerScore}`)
    }

 }

//console.log(game(playerPlay(), computerPlay()));
