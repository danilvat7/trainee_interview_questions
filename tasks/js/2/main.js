var myObject = {
  foo: 'bar',
  func: function() {
    var self = this;
    console.log('outer func:  this.foo = ' + this.foo);
    console.log('outer func:  self.foo = ' + self.foo);
    (function() {
      console.log('inner func:  this.foo = ' + this.foo);
      console.log('inner func:  self.foo = ' + self.foo);
    })();
  }
};
myObject.func();

// var dog = {
//   name: 'doggo',
//   sayName() {
//     console.log(this.name);
//   }
// };
// var sayName = dog.sayName;
// sayName();

// function Dog(name) {
//   this.name = name;
// }
// Dog.bark = function() {
//   console.log(this.name + ' says woof');
// };
// var fido = new Dog('fido');
// fido.bark();
