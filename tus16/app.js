let fs = require('fs');
let http = require('http');
let server = http.createServer(function(req, res) {
	// body...
	let myReadStream = fs.createReadStream(__dirname + '/readMe.txt');
	let myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt')	
	
	res.writeHead(200, {'Content-Type': 'text/plain'});
	myReadStream.pipe(res);
});


// myReadStream.on('data', function(chuck){
//   // console.log(chuck.length);
//   console.log(chuck);
//   myWriteStream.write(chuck);
// });
// myReadStream.pipe(myWriteStream);

server.listen(3000);


