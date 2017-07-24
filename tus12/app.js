let http = require('http')

let server = http.createServer(function(req, res) {
  console.log("Request was made: " + req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hey hai!');
});
server.listen(3000, '127.0.0.1');
console.log('listening to port 3000');
