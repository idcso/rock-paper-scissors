function getComputerChoice() {
	const gameChoices = ['Rock', 'Paper', 'Scissors'];

	return gameChoices[Math.floor( Math.random() * gameChoices.length )];
}

function getPlayerChoice() {
	let playerSelection = prompt('Choose: Rock / Paper / Scissors');
	return playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		return 'Tie! Try again.';
	} else if (playerSelection === 'Rock' && computerSelection === 'Scissors' ||
	           playerSelection === 'Paper' && computerSelection === 'Rock' ||
						 playerSelection === 'Scissors' && computerSelection === 'Paper') 
	{
		return `You win! ${playerSelection} beats ${computerSelection}`;
	} else {
		return `You lost! ${computerSelection} beats ${playerSelection}`;
	}
}

function game() {
	let score = {
		player: 0,
		computer: 0
	}

	for (let i = 0; i < 5; i++) {
		let result = playRound(getPlayerChoice(), getComputerChoice());
		console.log(result);

		if (result.includes('win')) {
			score.player++;
		} else if (result.includes('lost')) {
			score.computer++;
		} else {
			i--;
		}

		console.log(`Score: ${score.player} - ${score.computer}`);
	}

	if (score.player > score.computer) {
		console.log('You won!');
	} else {
		console.log('You lost!');
	}
}

game();