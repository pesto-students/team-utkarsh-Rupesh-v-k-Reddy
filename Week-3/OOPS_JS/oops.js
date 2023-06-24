// Inheritance
class vehicle {
	constructor(make, model, year, color) {
		this.make = make;
		this.model = model;
		this.year = year;
		this.color = color;
	}
	drive() {
		return `Driving ${this.make} ${this.model}`;
	}
}

class car extends vehicle {
	constructor(make, model, year, color, numseats) {
		super(make, model, year, color);
		this.numseats = numseats;
	}
}

class RideShaareCar extends car {
	constructor(make, model, year, color, numseats, isAvailable) {
		super(make, model, year, color, numseats);
		this.isAvailable = isAvailable;
	}
}

//Polymorphism
class Shape {
	calculateArea() {
		return 'Area is :';
	}
}

class Rectangle extends Shape {
	calculateArea(width, height) {
		let area = width * height;
		return `Area is : ${area}`;
	}
}

class Triangle extends Shape {
	calculateArea(base, height) {
		let area = (base * height) / 2;
		return `Area is : ${area}`;
	}
}

class Circle extends Shape {
	calculateArea(radius) {
		let area = 3.17 * radius * radius;
		return `Area is :${area}`;
	}
}

Rectangle1 = new Rectangle();
Rectangle1.calculateArea(5, 4); //'Area is : 20'

triangle1 = new Triangle();
triangle1.calculateArea(4, 2); //'Area is : 4'

circle = new Circle();
circle.calculateArea(2); //'Area is :12.68'

//Abstraction and Encapsulation

class BankAccount {
	#accountNumber;
	#balance;
	#accountHolderName;

	constructor(accountNumber, balance, accountHolderName) {
		this.#accountNumber = accountNumber;
		this.#balance = balance;
		this.#accountHolderName = accountHolderName;
	}

	get balance() {
		return this.#balance;
	}

	set balance(newBalance) {
		this.#balance = newBalance;
	}
}

class CheckingAccount extends BankAccount {
	constructor(accountNumber, balance, accountHolderName) {
		super(accountNumber, balance, accountHolderName);
	}

	deposit(amount) {
		this.balance += amount;
	}

	withdraw(amount) {
		this.balance -= amount;
	}
}

class SavingsAccount extends BankAccount {
	constructor(accountNumber, balance, accountHolderName) {
		super(accountNumber, balance, accountHolderName);
	}

	deposit(amount) {
		this.balance += amount;
	}

	withdraw(amount) {
		if (this.balance - amount >= 0) {
			this.balance -= amount;
		} else {
			console.log('Insufficient funds. Withdrawal failed.');
		}
	}
}

const checkingAccount = new CheckingAccount('123456789', 1000, 'John Doe');
checkingAccount.deposit(500);
checkingAccount.withdraw(200);
console.log(checkingAccount.balance); // Output: 1300

const savingsAccount = new SavingsAccount('987654321', 500, 'Jane Smith');
savingsAccount.deposit(200);
savingsAccount.withdraw(800); //'Insufficient funds. Withdrawal failed.'
console.log(savingsAccount.balance); //700
