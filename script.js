// Vars
let computerScore = 0;
let userScore = 0;
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const buttonContainer = document.querySelector('.btn-container');
const gameResultPara = document.querySelector('.gameResults');
const userScorePara = document.querySelector('.userScore');
const computerScorePara = document.querySelector('.computerScore');
const restartButton = document.querySelector('.restart-btn');

// This func for computer to choose its weapon
function computerPlay() {
	let choices = ['Rock', 'Paper', 'Scissors'];
	let randChoice = Math.floor(Math.random() * choices.length);
	let randomPlay = choices[randChoice];
	return randomPlay;
}

// This func plays one round
function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		gameResultPara.textContent = 'Draw!';
	}
	if ((playerSelection === 'Scissors' && computerSelection === 'Paper') ||
		 (playerSelection === 'Rock'&& computerSelection === 'Scissors') || 
		 (playerSelection === 'Paper' && computerSelection === 'Rock')) {
		gameResultPara.textContent = 'You win!';
		userScore++;
	}
	if ((playerSelection === 'Rock'&& computerSelection === 'Paper') ||
		 (playerSelection === 'Paper' && computerSelection === 'Scissors') ||
		 (playerSelection === 'Scissors' && computerSelection === 'Rock')) {
		gameResultPara.textContent = 'You lost!';
		computerScore++;
	}
}

// This func handles the user's click
function handleClick(playerSelection) {
	const computerSelection = computerPlay();
	playRound(playerSelection, computerSelection);
	userScorePara.textContent = `User score: ${userScore}`;
	computerScorePara.textContent = `Computer score: ${computerScore}`;
	endGameResult();
}

// This func to end the game
function endGameResult() {
	if(computerScore === 3 || userScore == 3) {
		buttonContainer.classList.add('removeBtns');
		restartButton.classList.add('active');
		return endGame();
	}
}

// This func to show the winner
function endGame() {
	return userScore > computerScore
	? (gameResultPara.textContent = 'Winner! Winner! Chicken Dinner!')
	: (gameResultPara.textContent = 'Looooser! Go cryyyy!');
}


// This func to restart the game
function restartGame() {
	computerScore = 0;
	userScore = 0;
	gameResultPara.textContent = 'Choose your weapon!';
	userScorePara.textContent = 'User score: 0';
	computerScorePara.textContent = 'Computer score: 0';
	restartButton.classList.remove('active');
	buttonContainer.classList.remove('removeBtns');
}

// Func for user's chouces
const handleCLickRock = () => handleClick('Rock');
const handleCLickPaper = () => handleClick('Paper');
const handleCLickScissors = () => handleClick('Scissors');


// Event listeners
rock.addEventListener('click', handleCLickRock);
paper.addEventListener('click', handleCLickPaper);
scissors.addEventListener('click', handleCLickScissors);
restartButton.addEventListener('click', restartGame);

