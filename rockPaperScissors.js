let opponentChoice;
let choice;
const winsAmoutn = document.getElementById('winsAmount');
const lossesAmount = document.getElementById('lossesAmount');
const rockLabel = document.getElementById('rockLabel');
const scissorsLabel = document.getElementById('scissorsLabel');
const paperLabel = document.getElementById('paperLabel');
const outcomeLabel = document.getElementById('outcomeLabel');
let wins = 0;
let losses = 0;
function pickRock(){
    choice = "rock";
    pickOpponentChoice();
}
function pickPaper(){
    choice = "paper";
    pickOpponentChoice();
}
function pickScissors(){
    choice = "scissors";
    pickOpponentChoice();
}
function pickOpponentChoice(){

    rockOpp.setAttribute('hidden', true);
    paperOpp.setAttribute('hidden', true);
    scissorsOpp.setAttribute('hidden', true);

    let oppChoice = Math.floor((Math.random() * 3) + 1);
    if(oppChoice == 1){
        opponentChoice = "Rock";
        rockOpp.removeAttribute('hidden');
        chooseWinner();
    }
    else if(oppChoice == 2){
        opponentChoice = "Paper";
        paperOpp.removeAttribute('hidden');
        chooseWinner();
    }
    else if(oppChoice == 3){
        opponentChoice = "Scissors";
        scissorsOpp.removeAttribute('hidden');
        chooseWinner();
    }
    else
        alert(choice);
    lossesAmount.textContent = losses;
    winsAmount.textContent = wins;
}

function chooseWinner(){
    rockLabel.textContent = "";
    scissorsLabel.textContent = "";
    paperLabel.textContent = "";
    if(choice == "rock"){
        scissors.setAttribute('hidden', true);
        paper.setAttribute('hidden', true);
    }
    else if(choice == "paper"){
        scissors.setAttribute('hidden', true);
        rock.setAttribute('hidden', true);
    }
    else if(choice == "scissors"){
        paper.setAttribute('hidden', true);
        rock.setAttribute('hidden', true);
    }
    if(choice == "rock" && opponentChoice == "Scissors"){
        wins++;
        outcomeLabel.textContent = "WIN";
    }
    else if(choice == "scissors" && opponentChoice == "Paper"){
        wins++;
        outcomeLabel.textContent = "WIN";
    }
    else if(choice == "paper" && opponentChoice == "Rock"){
        wins++;
        outcomeLabel.textContent = "WIN";
    }
    else if(choice == "rock" && opponentChoice == "Paper"){
        losses++;
        outcomeLabel.textContent = "LOSE";
    }
    else if(choice == "paper" && opponentChoice == "Scissors"){
        losses++;
        outcomeLabel.textContent = "LOSE";
    }
    else if(choice == "scissors" && opponentChoice == "Rock"){
        losses++;
        outcomeLabel.textContent = "LOSE";
    }
    else
        outcomeLabel.textContent = "DRAW";
}

function nextGame(){
        rock.removeAttribute('hidden');
        scissors.removeAttribute('hidden');
        paper.removeAttribute('hidden');
        rockOpp.setAttribute('hidden', true);
        paperOpp.setAttribute('hidden', true);
        scissorsOpp.setAttribute('hidden', true);
}

function resetAll(){
    nextGame();
    wins = 0;
    losses = 0;
    lossesAmount.textContent = losses;
    winsAmount.textContent = wins;
    outcomeLabel.textContent = "";
}