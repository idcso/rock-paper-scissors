function getComputerChoice() {
	const gameChoices = ['Rock', 'Paper', 'Scissors'];

	return gameChoices[Math.floor( Math.random() * gameChoices.length )];
}