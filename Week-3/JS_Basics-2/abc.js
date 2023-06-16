class Calculator {
	// Add method
	add(a, b) {
		return a + b;
	}

	// Subtract method
	subtract(a, b) {
		return a - b;
	}

	// Multiply method
	multiply(a, b) {
		return a * b;
	}

	// Divide method
	divide(a, b) {
		return a / b;
	}
}

// ScientificCalculator class extending Calculator
class ScientificCalculator extends Calculator {
	// Square method
	square(num) {
		return num * num;
	}

	// Cube method
	cube(num) {
		return num * num * num;
	}

	// Power method
	power(base, exponent) {
		return Math.pow(base, exponent);
	}
}

const calculator = new ScientificCalculator();

// Using the "call" method, invoking the "add" method of the Calculator class with arguments 10 and 5
const addResult = Calculator.prototype.add.call(calculator, 10, 5);
console.log('Add Result:', addResult); // Output: 15

// Using the "apply" method, invoking the "subtract" method of the Calculator class with arguments 10 and 5
const subtractResult = Calculator.prototype.subtract.apply(calculator, [10, 5]);
console.log('Subtract Result:', subtractResult); // Output: 5

// Using the "bind" method, creating a new method named "multiplyByTwo" that multiplies a number by 2 and returns the result.
//Binding the "multiplyByTwo" method to the instance of the ScientificCalculator class.
const multiplyByTwo = calculator.multiply.bind(calculator, 2);
console.log('Multiply by Two Result:', multiplyByTwo(5)); // Output: 10

// Using the "bind" method, creating a new method named "powerOfThree" that raises a number to the power of 3 and returns the result.
//Binding the "powerOfThree" method to the instance of the ScientificCalculator class.
const powerOfThree = calculator.power.bind(calculator, 3);
console.log('Power of Three Result:', powerOfThree(2)); // Output: 8
