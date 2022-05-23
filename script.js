function game() {
	for (let i = 0; i < 5; i++) {

		function computerPlay() {
			let choices = ['Rock', 'Paper', 'Scissors'];
			let randChoice = Math.floor(Math.random() * choices.length);
			let randomPlay = choices[randChoice];
			return randomPlay;
		}

		let computerScore = 0;
		let userScore = 0;

		let computerSelection = computerPlay();
		let playerSelection = prompt('Choose: rock, paper, scissors.', computerPlay());

		function playRound(playerSelection, computerSelection) {

			playerSelection = playerSelection.toLowerCase();
			computerSelection = computerSelection.toLowerCase();

			if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
				alert('Can you even play?! Please, choose another fighter!');
			}
			if (playerSelection === 'rock' && computerSelection === 'rock') {
				alert('Draw!');
			}
			if (playerSelection === 'rock' && computerSelection === 'paper') {
				computerScore++;
				alert('You lose! Paper beats rock!');
			}
			if (playerSelection === 'rock' && computerSelection === 'scissors') {
				userScore++;
				alert('You win! Rock beats scissors!');
			}

			if (playerSelection === 'paper' && computerSelection === 'rock') {
				userScore++;
				alert('You win! Paper beats Rock!');
			}
			if (playerSelection === 'paper' && computerSelection === 'paper') {
				alert('Draw!');
			}
			if (playerSelection === 'paper' && computerSelection === 'scissors') {
				computerScore++;
				alert('You lose! Scissors beat Paper!');
			}

			if (playerSelection === 'scissors' && computerSelection === 'rock') {
				computerScore++;
				alert('You lose! Rock beats Scissors!');
			}
			if (playerSelection === 'scissors' && computerSelection === 'paper') {
				userScore++;
				alert('You win! Scissors beat paper!');
			}
			if (playerSelection === 'scissors' && computerSelection === 'scissors') {
				alert('Draw!');
			}

			return alert(`Your score is ${userScore}. Computer score is ${computerScore}`);
		}
		playRound(playerSelection, computerSelection);
	}
}

game()