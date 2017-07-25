let fs = require('fs');
let http = require('http');
let server = http.createServer(function(req, res) {
	// body...
	console.log('request was made: ' + req.url);
	let myReadStream = fs.createReadStream(__dirname + '/index.html');
	// let myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt')	
	
	// res.writeHead(200, {'Content-Type': 'text/plain'});
	// res.writeHead(200, {'Content-Type': 'text/html'});
	res.writeHead(200, {'Content-Type': 'application/JSON'});

	var myobj = {
		name: 'hai',
		age: 21
	}
	// console.log(myobj);
	// myReadStream.pipe(res);
	res.end(JSON.stringify(myobj));
});


// myReadStream.on('data', function(chuck){
//   // console.log(chuck.length);
//   console.log(chuck);
//   myWriteStream.write(chuck);
// });
// myReadStream.pipe(myWriteStream);

server.listen(3000, function() {
	// body...
	console.log('Start server: 3000.');
});


