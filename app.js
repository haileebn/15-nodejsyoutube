// const stuff = require('./stuff');
// console.log(stuff.counter(['hai', 'nguyen', 'van']));
// console.log(stuff.pi);
// console.log(stuff.adder(2,3));

const events = require('events');
const util = require('util');

let Person = function(name) {
  this.name = name;
};
util.inherits(Person,events.EventEmitter);

let hai = new Person('Hai');
let van = new Person('van');
let nam = new Person('nam');
let people = [hai, van, nam];
people.forEach(function(person){
  person.on('speak', function(mssg){
    console.log(person.name + 'said: ' + mssg);
  });
});

hai.emit('speak', "I love you!")



// let myEmitter = new events.EventEmitter();
// myEmitter.on('someEvent', function(mssg) {
//   console.log(mssg);
// });
// myEmitter.emit('someEvent', 'hai nguyen online!');
