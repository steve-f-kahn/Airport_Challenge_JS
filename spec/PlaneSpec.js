describe('Plane', function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = "Airport"
  });

  it('lands at an airport', function() {
    expect(plane.land(airport)).toEqual("Airport");
  });

  it("Is not flying when landed", function(){
    plane.land(airport);
    expect(plane.flying).toBe(false);
  });

  it('Takes off from the airport', function(){
    plane.land(airport);
    plane.takeoff(airport);
    expect(plane.flying).toBe(true);
  });

});
