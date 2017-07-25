let express = require('express');
let port = process.env.PORT || 3000;
// let port = process.env.PORT || 3000;

let app = express();
app.set('view engine', 'ejs');

app.get('/:name', function(req, res) {
	// body...
	let myobj = {age: 20, job: 'DEV'};
	res.render('profile', {person: req.params.name, info: myobj});
});

app.get('/contact', function(req, res) {
	/*optional stuff to do after success */
	res.send('This is the contact page.');
});

app.listen(port,function() {
	// body...
	console.log('Start on port: ' + port);
});