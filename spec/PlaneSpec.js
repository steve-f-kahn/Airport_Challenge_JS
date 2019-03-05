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

});
