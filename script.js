const buttons = document.querySelectorAll('button');
const result = document.getElementById('result');
const userScore1 = document.getElementById('userScore');
const compScore1 = document.getElementById('compScore');
const resetBtn = document.getElementById('resetBtn');


let userScore = 0;
let compScore = 0;

function getcompCh() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getWinner(userCh, compCh) {
  if (userCh === compCh) {
    return "tie";
  }
  if (
    (userCh === 'Rock' && compCh === 'Scissors') ||
    (userCh === 'Paper' && compCh === 'Rock') ||
    (userCh === 'Scissors' && compCh === 'Paper')
  ) {
    return "user";
  }
  return "computer";
}

function updateScore(winner) {
  if (winner === "user") {
    userScore++;
    userScore1.textContent = userScore;
  } else if (winner === "computer") {
    compScore++;
    compScore1.textContent = compScore;
  }
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const userCh = button.textContent;
    const compCh = getcompCh();
    const winner = getWinner(userCh, compCh);

    updateScore(winner);

    let resultText = `You chose: ${userCh}<br>` +
     `Computer chose: ${compCh}<br>`;
    if (winner === "tie") {
      resultText += "It's a tie!";
    } else if (winner === "user") {
      resultText += "You win!";
    } else {
      resultText += "Computer wins!";
    }

     result.innerHTML = resultText;
  });
  
});

resetBtn.addEventListener('click', () => {
  userScore = 0;
  compScore = 0;
  userScore1.textContent = '0';
  compScore1.textContent = '0';
  result.innerHTML = '';
  result.style.color = '#333';
});