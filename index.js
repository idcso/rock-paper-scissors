function getComputerChoice() {
	const gameChoices = ['Rock', 'Paper', 'Scissors'];

	return gameChoices[Math.floor( Math.random() * gameChoices.length )];
}

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

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