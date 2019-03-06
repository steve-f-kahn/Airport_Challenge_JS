function Airport(){
  this.hanger = []
};
Airport.prototype.landPlane = function(plane){
  this.hanger.push(plane)
};
Airport.prototype.takeOffPlane = function(plane){

  var plane_index = this.hanger.indexOf(plane);
  return this.hanger.splice(plane_index, 1)
};
