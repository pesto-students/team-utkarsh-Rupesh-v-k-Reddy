//Protecting the Object
let person = {
	name: 'rupesh Reddy thankanati',
	age: 26,
	email: 'rupesh.reddy009@gmail.com',
	get getage() {
		return this.age;
	},
	set setage(value) {
		this.age = value;
	},
};

Object.defineProperties(person, {
	name: { writable: false },
	email: { writable: false },
	age: { writable: true },
});

//Protoype
function vehicle(make, model, year) {
	(this.make = make), (this.model = model), (this.year = year);
}

vehicle.prototype.getDetails = function () {
	return `This is ${this.make} ${this.model} from ${this.year}`;
};

class car extends vehicle {
	constructor(make, model, year, numDoors) {
		super(make, model, year);
		this.numDoors = numDoors;
	}
	getDetails() {
		return `This is ${this.make} ${this.model} from ${this.year} with ${this.numDoors} Doors`;
	}
}

car1 = new car('BMW', 'XM3', 2022, 4);
vehicle1 = new vehicle('Nissan', 'GTR', 2020);

car1.getDetails(); // 'This is BMW XM3 from 2022 with 4 Doors'
vehicle1.getDetails(); //'This is Nissan GTR from 2020'
