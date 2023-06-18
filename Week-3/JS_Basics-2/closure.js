function counter() {
	let count = 0; // Initialize count variable

	// Inner function (closure) that increases count and returns its value
	function increment() {
		count++;
		return count;
	}

	return increment;
}

const firstCounter = counter();
const secondCounter = counter();

// Call the firstCounter function five times and store the returned values in an array named "firstValues"
const firstValues = [];
for (let i = 0; i < 5; i++) {
	firstValues.push(firstCounter());
}

// Call the secondCounter function three times and store the returned values in an array named "secondValues"
const secondValues = [];
for (let i = 0; i < 3; i++) {
	secondValues.push(secondCounter());
}

// Print the arrays
console.log('firstValues array:', firstValues);
console.log('secondValues array:', secondValues);
