describe('vehicle.customize function', function () {
  it('should customize the toyota to now have 3 wheels instead of 4', function () {
    const myRav4 = new Car('Toyota', 'Rav4', 2023);
    const myGarage = new Garage(2);
    myGarage.add(myRav4);
    myGarage.customize(myRav4, 'numWheels', 3)

    expect(myGarage.vehicles[0].numWheels).toEqual(3);
  });

  it('should add a new color customization to the vehicle', function () {
    const myRav4 = new Car('Toyota', 'Rav4', 2023);
    const myGarage = new Garage(2);
    myGarage.add(myRav4);
    myGarage.customize(myRav4, 'color', 'blue');

    expect(myGarage.vehicles[0].color).toEqual('blue');
  });
});