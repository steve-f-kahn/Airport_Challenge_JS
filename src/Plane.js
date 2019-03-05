var Plane = function(){
  this.flying = true
};

Plane.prototype.land = function(airport) {
  this.flying = false;
  return this._airport = airport;
};

Plane.prototype.takeoff = function(airport) {
  this.flying = true;
  this._airport = null;
};
