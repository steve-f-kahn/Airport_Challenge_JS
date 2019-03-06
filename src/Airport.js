function Airport(weather = new Weather(), capacity = 1){
  this.weather = weather
  this.hanger = []
  this.capacity = capacity;
};
Airport.prototype.landPlane = function(plane){
  if(this.weather.storm) { throw("Too stormy to land")}
  if(this.hanger.length >= this.capacity) { throw('Unable to land; no hangar space!'); }
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
