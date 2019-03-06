describe("Airport", function(){

  var airport
  var plane

  beforeEach(function(){
    airport = new Airport()
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
});
