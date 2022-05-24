let computerScore = 0;
let userScore = 0;

function computerPlay() {
	let choices = ['Rock', 'Paper', 'Scissors'];
	let randChoice = Math.floor(Math.random() * choices.length);
	let randomPlay = choices[randChoice];
	return randomPlay;
}

function playRound(playerSelection, computerSelection) {

	playerSelection = playerSelection.toLowerCase();
	computerSelection = computerSelection.toLowerCase();

	if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
		alert('Can you even play?! Please, choose another fighter!');
	}
	
	if (playerSelection === computerSelection) {
		alert('Draw!');
	}

	if (playerSelection === 'scissors' && computerSelection === 'paper') {
		userScore++;
		alert('You win! Scissors beats paper!');
	}
	if (playerSelection === 'rock' && computerSelection === 'scissors') {
		userScore++;
		alert('You win! Rock beats scissors!');
	}
	if (playerSelection === 'paper' && computerSelection === 'rock') {
		userScore++;
		alert('You win! Paper beats Rock!');
	}

	if (playerSelection === 'rock' && computerSelection === 'paper') {
		computerScore++;
		alert('You lose! Paper beats rock!');
	}
	if (playerSelection === 'paper' && computerSelection === 'scissors') {
		computerScore++;
		alert('You lose! Scissors beats Paper!');
	}
	if (playerSelection === 'scissors' && computerSelection === 'rock') {
		computerScore++;
		alert('You lose! Rock beats Scissors!');
	}
}

function endGame() {
	if (userScore === computerScore) {
		return alert('Booooring!')
	}
	if (userScore > computerScore) {
		return alert('Winner! Winner! Chicken Dinner!')
	}
	if (userScore < computerScore) {
		return alert('Looooser! Go cryyyy!')
	}
}

function play() {
	while((computerScore < 3) && (userScore < 3)) {
		let computerSelection = computerPlay();
		let playerSelection = prompt('Choose: rock, paper, scissors. Until 3 wins.', computerPlay());
		playRound(playerSelection, computerSelection);
		alert(`Your score is ${userScore}. Computer score is ${computerScore}`);
	}
	endGame()
}

play()