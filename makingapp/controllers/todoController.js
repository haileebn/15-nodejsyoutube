let bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })


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