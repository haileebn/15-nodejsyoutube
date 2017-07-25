let express = require('express');
let port = process.env.PORT || 3000;
// let port = process.env.PORT || 3000;

let app = express();

app.get('/', function(req, res) {
	// body...
	res.send("This is the homepage.");
});

app.get('/contact', function(req, res) {
	/*optional stuff to do after success */
	res.send('This is the contact page.');
});

app.listen(port,function() {
	// body...
	console.log('Start on port: ' + port);
});