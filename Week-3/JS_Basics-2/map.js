function calcWordFrequencies(input) {
	const wordFrequencyMap = new Map();
	//const words = prompt("Enter a list of words separated by spaces:").split(" ");
	const words = input.split(' ');

	for (let i = 0; i < words.length; i++) {
		const word = words[i];
		if (wordFrequencyMap.has(word)) {
			wordFrequencyMap.set(word, wordFrequencyMap.get(word) + 1);
		} else {
			wordFrequencyMap.set(word, 1);
		}
	}

	wordFrequencyMap.forEach((frequency, word) => {
		console.log(`${word} ${frequency}`);
	});
}

calcWordFrequencies('hey hi mark hi mark');
