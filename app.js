// Car OO Challenge
// Create a class for vehicle.Each vehicle instance should have the following properties: Make, Model, Year

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

Vehicle.prototype.honk = function () {
  return 'honk!';
};
Vehicle.prototype.toString = function () {
  return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
};

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }
}

Motorcycle.prototype.revEngine = function () {
  return 'VROOM!!!';
}

class Garage {
  constructor(capacity) {
    this.vehicles = [];
    this.capacity = capacity;
  }
}

Garage.prototype.add = function(vehicle) {
  if (!(vehicle instanceof Vehicle)) {
    return 'Only vehicles are allowed in here!';
  } else if (this.vehicles.length < this.capacity) {
    this.vehicles.push(vehicle);
    return "Vehicle added!"
  } else {
    return "Sorry, we're full.";
  }
}

const myHonda = new Car('Honda', 'Civic', 2014);
const myRav4 = new Car('Toyota', 'Rav4', 2023);
const myHarley = new Motorcycle('Harley', 'Davidson', 2019);

