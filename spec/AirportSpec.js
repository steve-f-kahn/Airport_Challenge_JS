describe("Airport", function(){

  var airport
  var plane

  beforeEach(function(){
    airport = new Airport(new Weather(90))
    plane = "plane"
  })

  it("Allows a plane to land when sunny", function(){
    airport.landPlane(plane)
    expect(airport.hanger).toContain(plane)
  });

  it("Allows a plane to takeoff when sunny", function(){
    airport.landPlane(plane)
    airport.takeOffPlane(plane)
    expect(airport.hanger).not.toContain(plane)
  });

  it("Does not allow the plane to land when stormy", function(){
    airport = new Airport(new Weather(99))
    expect(function(){airport.landPlane(plane)}).toThrow("Too stormy to land")
  });
  it("Does not allow the plane to take off when stormy", function(){
    airport = new Airport(new Weather(97))
    airport.landPlane(plane);
    airport.updateWeather(new Weather(99));
    expect(function(){airport.takeOffPlane(plane)}).toThrow("Too stormy to take off");
  });
});