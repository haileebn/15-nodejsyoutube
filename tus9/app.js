let fs = require('fs');
let readf = fs.readFileSync('readMe.txt', 'utf8');
// console.log(readf);

fs.writeFileSync('writeMe.txt', readf);
