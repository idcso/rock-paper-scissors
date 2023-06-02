const buttons = document.querySelector('.buttons');
const result = document.querySelector('.result');

let gameScore = {
	player: 0,
	computer: 0
}

buttons.addEventListener('click', game);

function getComputerChoice() {
	const gameChoices = ['Rock', 'Paper', 'Scissors'];

	return gameChoices[Math.floor( Math.random() * gameChoices.length )];
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		result.textContent = `Tie! Try again.\n Score: ${gameScore.player} - ${gameScore.computer}`;
	} else if (playerSelection === 'Rock' && computerSelection === 'Scissors' ||
	           playerSelection === 'Paper' && computerSelection === 'Rock' ||
						 playerSelection === 'Scissors' && computerSelection === 'Paper') 
	{
		gameScore.player++;
		result.textContent = `You win! ${playerSelection} beats ${computerSelection}\n Score: ${gameScore.player} - ${gameScore.computer}`;
	} else {
		gameScore.computer++;
		result.textContent = `You lost! ${computerSelection} beats ${playerSelection}\n Score: ${gameScore.player} - ${gameScore.computer}`;
	}
}

function game(event) {
	if (gameScore.player < 5 && gameScore.computer < 5) {
		playRound(event.target.textContent, getComputerChoice());

		if (gameScore.player === 5) {
			result.textContent = `Game over! You won!\nScore: ${gameScore.player} - ${gameScore.computer}`;
		} else if (gameScore.computer === 5) {
			result.textContent = `Game over! You lost!\nScore: ${gameScore.player} - ${gameScore.computer}`;
		}
	} else {
		buttons.removeEventListener('click', game);
	}
}