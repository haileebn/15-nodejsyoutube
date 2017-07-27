let express = require('express');
let port = process.env.PORT || 3000;
// let port = process.env.PORT || 3000;

let app = express();
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'))

app.get('/', function(req, res) {
	/*optional stuff to do after success */
	res.render('index');
});

app.get('/contact', function(req, res) {
	/*optional stuff to do after success */
	res.render('contact', {data: req.query});
});

app.get('/profile/:name', function(req, res) {
	// body...
	let myobj = {age: 20, job: 'DEV', hobbies: ['eating', 'fighting', 'fishing']};
	res.render('profile', {person: req.params.name, data: myobj});
});

// app.get('/contact', function(req, res) {
// 	optional stuff to do after success 
// 	res.send('This is the contact page.');
// });

app.listen(port,function() {
	// body...
	console.log('Start on port: ' + port);
});