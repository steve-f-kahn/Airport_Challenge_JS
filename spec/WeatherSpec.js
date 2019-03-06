describe('Weather', function(){
  var weather
  it("It is stormy", function(){
    weather = new Weather(99);
    expect(weather.storm).toBe(true);
  });

  it("It is sunny", function(){
    weather = new Weather(80);
    expect(weather.storm).toBe(false);
  })

  it("It is sunny", function(){
    weather = new Weather(98);
    expect(weather.storm).toBe(false);
  })

  it("It is sunny", function(){
    weather = new Weather(1);
    expect(weather.storm).toBe(false);
  })

});
