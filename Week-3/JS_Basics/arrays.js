function divideArray(nums) {
	let evenNums = [],
		oddNums = [];
	for (let i in nums) {
		if (i % 2 === 0) {
			evenNums.push(nums[i]);
		} else {
			oddNums.push(nums[i]);
		}
	}
	evenNums.sort((a, b) => a - b);
	oddNums.sort((a, b) => a - b);
	console.log(
		`EvenNumbers : ${evenNums.length > 0 ? evenNums.join(' ') : 'None'}`
	);
	console.log(
		`OddNumbers : ${oddNums.length > 0 ? oddNums.join(' ') : 'None'}`
	);
}
