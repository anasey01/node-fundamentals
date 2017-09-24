
let stuffs = require('./modules/stuffs')
let events = require('events')
let util = require('util');

// //Call the events emitter constructor on the modules.exports on events
// let eventEmitter = new events.EventEmitter();

// eventEmitter.on('someRandomEvent', function(message){
//     console.log(message);
// });

// eventEmitter.emit('someRandomEvent', 'Yeaaa! Event was emitted!! Yipee!');

//One of the things util does is to help us inherit object constructor so that we can attach some custom 
//events to that object constructor

//creating a object constructor of person
let Person = function(name){
this.name = name;
}

//Now, I want to inherit this object constructor so that a custom event can be attached to it.
util.inherits(Person, events.EventEmitter); //This inherits the object constructor and the EventEmitter.

//Creating persons
let eunice = new Person('eunice');
let oluseyi = new Person('oluseyi');
let sandra = new Person('sandra');

//Putting persons into an array
let people = [eunice, oluseyi, sandra];
//Circling through the array of people.
people.forEach(function(person){
 //Attact a custom event on each person.
 person.on('speak', function(msg){
    console.log(person.name + ' said: ' + msg);
 });
});

eunice.emit('speak', 'Oh, some JavaScript in my system');
oluseyi.emit('speak', 'I\'m gonna be slaying me some JS');
sandra.emit('speak', 'I just wanna have fun');


