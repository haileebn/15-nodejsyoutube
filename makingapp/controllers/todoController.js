let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: false })
let mongoose = require('mongoose');

// connect to db
mongoose.connect('mongodb://test:admin@ds127063.mlab.com:27063/todo')
// create a schema - this is like a blueprint

let todoSchema = new mongoose.Schema({
	item: String
});

let Todo = mongoose.model('Todo', todoSchema);
let itemOne = Todo({item: 'buy flowers'}).save(function(err) {
	// body...
	if (err) throw err;
	console.log('item saved');
});


let data = [{item: 'get milk'},{item: 'walk dog'}, {item: 'kick some coding ass'}]

module.exports = function(app) {
	// body...
	app.get('/todo', function(req, res) {
		// body...
		res.render('todo', {todos: data});
	});
	app.post('/todo', urlencodedParser, function(req, res) {
		// body...
		data.push(req.body)
		res.json(data);
	});
	app.delete('/todo/:item', function(req, res) {
		// body...
		data = data.filter(function(todo) {
			return todo.item.replace(/ /g, '-') !== req.params.item;			
		});
	res.json(data);
	});
}