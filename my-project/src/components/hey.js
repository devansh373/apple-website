class Animal {}
class Cat extends Animal {
  constructor() {
    this.noise = "meow";
  }
  makeNoise() {
    return this.noise;
  }
}
class Tiger extends Cat {
  constructor() {
    super();
    this.noise = "growl";
  }
}
var result = new Tiger();
console.log(result.makeNoise());
