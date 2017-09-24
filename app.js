let fs = require('fs')

//Asynchonous method to read files.
let readMe = fs.readFileSync('readMe.txt', 'utf8');
console.log(readMe);

//Asynchonous method to write files.
fs.writeFileSync('writeMe.text', readMe);