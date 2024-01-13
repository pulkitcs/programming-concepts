
// inheritance
function animal(name, color, type) {                                      
  this.name = name;
  this.color = color;
  this.type = type;
}
animal.prototype.getColor = function() { return this.color }
animal.prototype.getType = function() { return this.type }

function cat(name, color, type){
  animal.call(this, name, color, type);
}

cat.prototype = Object.create(animal.prototype);

const a = new animal('Mammal', 'any', 'omni');
console.log(a.getColor());
console.log(a.getType());


const c = new cat('Baghira', 'black', 'indian');
console.log(c.getColor());
console.log(c.getType());

// factory pattern

function plant(name, type) {
  this.getName = function() {
    return name;
  }

  this.getType = function() {
    return type;
  }
}


const aplant = new plant('neem', 'medicinal');
console.log(aplant.getName());
console.log(aplant.getType());