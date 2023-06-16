function playGuessingGame(numToGuess, totalGuesses = 10) {
	let promptText = 'Enter a number between 1 and 100.';

	for (let i = 1; i <= totalGuesses; i++) {
		let userGuess = prompt(promptText);

		if (userGuess === null) {
			return 0;
		}

		if (userGuess === '') {
			promptText = 'Please enter a number.';
			i--;
			continue;
		}

		let guess = parseInt(userGuess);

		if (isNaN(guess)) {
			promptText = 'Please enter a number.';
			i--;
			continue;
		}

		if (guess < numToGuess) {
			promptText = `${guess} is too small. Guess a larger number.`;
		} else if (guess > numToGuess) {
			promptText = `${guess} is too large. Guess a smaller number.`;
		} else {
			return i;
		}
	}

	return 0;
}

let numberToGuess = 42;
let guesses = playGuessingGame(numberToGuess);

if (guesses === 0) {
	console.log("You couldn't guess the number!");
} else {
	console.log(
		`Congratulations! You guessed the number in ${guesses} attempts.`
	);
}
