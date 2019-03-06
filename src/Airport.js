function Airport(weather = new Weather()){
  this.weather = weather
  this.hanger = []
  this.capacity = 1;
};
Airport.prototype.landPlane = function(plane){
  if(this.weather.storm) { throw("Too stormy to land")}
  this.hanger.push(plane)
};
Airport.prototype.takeOffPlane = function(plane){
  if(this.weather.storm) { throw("Too stormy to take off")}
  var plane_index = this.hanger.indexOf(plane);
  return this.hanger.splice(plane_index, 1)
};

Airport.prototype.updateWeather = function(weather){
  this.weather = weather;
};
