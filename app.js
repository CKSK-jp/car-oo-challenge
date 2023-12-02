// Car OO Challenge
// Create a class for vehicle.Each vehicle instance should have the following properties: Make, Model, Year

class Vehicle {
  constructor(make, model, year, numWheels) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWheels = numWheels
  }

  toString() {
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
  }
}

Vehicle.prototype.honk = function () {
  return 'honk!';
};

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year, 4);
  }

  toString() {
    return `This my new car that has ${this.numWheels} wheels and is a ${this.make} ${this.model} from ${this.year}.`;
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year, 2);
  }

  toString() {
    return `This my new motorcycle that has ${this.numWheels} wheels and is a ${this.make} ${this.model} from ${this.year}.`;
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

  // add more space to your garage
  renovate() {
    this.capacity++;
    console.log(`Your garage can now fit ${this.capacity} cars!`);
  }

  // customize your cars to have new properties!
  customize(vehicle, prop, value) {
    const index = this.vehicles.indexOf(vehicle);
    if (!(vehicle instanceof Vehicle) && index === -1) {
      return 'Your entered vehicle does not exist or is not a vehicle!';
    } else {
      const currVehicle = this.vehicles[index];
      if (currVehicle.hasOwnProperty(prop)) {
        currVehicle[prop] = value;
        console.log(`Your ${currVehicle.make} ${currVehicle.model} has had its ${prop} custimized to ${value}`);
      } else {
        currVehicle[prop] = value;
        console.log(`Your ${currVehicle.make} ${currVehicle.model} has a new customization: ${currVehicle[prop]} = ${value}`);
      }
    }
  }
}

Garage.prototype.add = function (vehicle) {
  if (!(vehicle instanceof Vehicle)) {
    return 'Only vehicles are allowed in here!';
  } else if (this.vehicles.length < this.capacity) {
    this.vehicles.push(vehicle);
    return "Vehicle added!"
  } else {
    return "Sorry, we're full.";
  }
}

Garage.prototype.remove = function (vehicle) {
  const vIndex = this.vehicles.indexOf(vehicle);
  if (vIndex !== -1) {
    const removedVehicle = vehicle;
    this.vehicles.splice(vIndex, 1);
    return `The ${removedVehicle.make} ${removedVehicle.model} has been removed from the garage!`
  } else {
    return `The ${removedVehicle.make} ${removedVehicle.model} was not found in the garage!`
  }
}

// const myHonda = new Car('Honda', 'Civic', 2014);
// const myRav4 = new Car('Toyota', 'Rav4', 2023);
// const myHarley = new Motorcycle('Harley', 'Davidson', 2019);
// const myGarage = new Garage(2);
// myGarage.add(myHonda);
// myGarage.add(myHarley);
// console.log(myGarage.vehicles);
// console.log(myGarage.remove(myHonda));
// myGarage.renovate();

// console.log(myHonda.toString());
// console.log(myHarley.toString());