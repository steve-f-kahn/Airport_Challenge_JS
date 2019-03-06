function getRandomInt(max){
  return Math.floor(Math.random() * Math.floor(max));
}

function Weather(num = getRandomInt(100)){
  num > 98 ? this.storm = true : this.storm = false
}
