// Event trigger
function buttonClick(e) {
  let userChoice = document.getElementById('playerChoice').innerHTML=e.target.id;
  let machineResultSpan = computerPlay();
  let winner = getWinner(userChoice, machineResultSpan);
  let declare = declareWinner(winner, machineResultSpan);
  scoreBoard();
  gameEnd();

};

// computer's random selection
  function computerPlay() {
        const choices = ["rock", "paper", 'scissors'];
        const result = choices[Math.floor(Math.random() * choices.length)];
        const machineResultSpan = document.getElementById('machineChoice').innerHTML = result;
        return result;
  };

  let yourScore = 0;
  let compScore = 0;

// Increments Scoreboard
function declareWinner(w, machineResultSpan) {
  let declareWinner = document.getElementById('declareWinner');
  if (w === 'player') {
      declareWinner.textContent ='You Win!';
      yourScore++
  } else if(w === 'computer') {
    declareWinner.textContent= 'You Lose!';
    compScore++
  } else {
    declareWinner.textContent = "It's a Draw";
  }
};


function gameEnd() {
  if (yourScore === 5) {
    alert("You took down the machine!");
    declareWinner.yourScore = 0;
    declareWinner.compScore = 0;
    let resetUser = document.getElementById('player');
    resetUser.textContent = 0;
    let resetCpu = document.getElementById('machine');
    resetCpu.textContent = 0;
    let resetUserChoice = document.getElementById('playerChoice');
    resetUserChoice.textContent = " ";
    let resetCpuChoice = document.getElementById('machineChoice');
    resetCpuChoice.textContent = " ";
    let resetDeclare = document.getElementById('declareWinner');
    resetDeclare.textContent = " ";
    return;


  } else if (compScore === 5) {
    alert("The Machine is too much to handle...");
    declareWinner.yourScore = 0;
    declareWinner.compScore = 0;
    let reset = document.getElementById('player');
    reset.textContent = 0;
    let resetCpu = document.getElementById('machine');
    resetCpu.textContent = 0;
    let resetUserChoice = document.getElementById('playerChoice');
    resetUserChoice.textContent = " ";
    let resetCpuChoice = document.getElementById('machineChoice');
    resetCpuChoice.textContent = " ";
    let resetDeclare = document.getElementById('declareWinner');
    resetDeclare.textContent = " ";
    return;
} else {
    return;
  }
};

// Score output
function scoreBoard() {
  let userScore = document.getElementById('player');
  userScore.textContent = yourScore ;
  let machineScore = document.getElementById('machine');
  machineScore.textContent = compScore ;
};

function getWinner(user, machine) {

  if (user === machine) {
        return 'Tie';
  }
  if  ((user === 'rock' && machine === 'scissors') ||
      (user === 'paper' && machine === 'rock') ||
      (user === 'scissors' && machine === 'paper')) {
        return 'player';
          }

  if  ((machine === 'rock' && user === 'scissors') ||
      (machine === 'paper' && user === 'rock') ||
      (machine === 'scissors' && user === 'paper'))
      {
      return 'computer';
      }
};
function restartGame() {
  declareWinner.yourScore = 0;
  declareWinner.compScore = 0;
  document.getElementById('player').innerHTML = `
  <span> 0 </span>`;
  document.getElementById('machine').innerHTML = `
  <span> 0 </span>`;

}



// button event
document.getElementById('restart').addEventListener('click', restartGame);
let rock = document.getElementById('rock').addEventListener('click',
buttonClick);
let paper = document.getElementById('paper').addEventListener('click',
buttonClick);
let scissors = document.getElementById('scissors').addEventListener('click',
buttonClick);
