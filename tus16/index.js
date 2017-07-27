let express = require('express');
let port = process.env.PORT || 3000;
let bodyParser = require('body-parser');
// let port = process.env.PORT || 3000;

let app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

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
app.post('/contact', urlencodedParser, function(req, res) {
	/*optional stuff to do after success */
	// console.log(req.body);
	res.render('contact-success', {data: req.body});
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