let express = require('express');
let port = process.env.PORT || 3000;
let todoController = require('./controllers/todoController');


let app = express();
app.set('view engine', 'ejs');

// static files
app.use(express.static('./public'));

// fire controllers
todoController(app);

// listen to port
app.listen(port, function() {
	// body...
	console.log("you are listening to port: " + port);
});


