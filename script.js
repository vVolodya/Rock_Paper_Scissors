function computerPlay() {
	let choices = ['Rock', 'Paper', 'Scissors'];
	let randChoice = Math.floor(Math.random() * choices.length);
	let randomPlay = choices[randChoice];
	return randomPlay;
}

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

let computerScore = 0;
let userScore = 0;
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const buttonContainer = document.querySelector('.btn-container');
const gameResultPara = document.querySelector('.gameResults');
const userScorePara = document.querySelector('.userScore');
const computerScorePara = document.querySelector('.computerScore');
const endGamePara = document.querySelector('.endGame');
const restartButton = document.querySelector('.restart-btn');

function handleClick(playerSelection) {
	const computerSelection = computerPlay();
	playRound(playerSelection, computerSelection);
	userScorePara.textContent = `User score: ${userScore}`;
	computerScorePara.textContent = `Computer score: ${computerScore}`;
	endGameResult();
}

function endGameResult() {
	if(computerScore === 3 || userScore == 3) {
		gameResultPara.textContent = '';
		buttonContainer.classList.add('removeBtns');
		restartButton.classList.add('active');
		return endGame();
	}
}

function endGame() {
	return userScore > computerScore
	? (endGamePara.textContent = 'Winner! Winner! Chicken Dinner!')
	: (endGamePara.textContent = 'Looooser! Go cryyyy!');
}

function restartGame() {
	computerScore = 0;
	userScore = 0;
	gameResultPara.textContent = 'Choose your weapon!';
	userScorePara.textContent = 'User score: 0';
	computerScorePara.textContent = 'Computer score: 0';
	endGamePara.textContent = '';
	restartButton.classList.remove('active');
	buttonContainer.classList.remove('removeBtns');
}

const handleCLickRock = () => handleClick('Rock');
const handleCLickPaper = () => handleClick('Paper');
const handleCLickScissors = () => handleClick('Scissors');

rock.addEventListener('click', handleCLickRock);
paper.addEventListener('click', handleCLickPaper);
scissors.addEventListener('click', handleCLickScissors);
restartButton.addEventListener('click', restartGame);

