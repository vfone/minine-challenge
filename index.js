var http = require('http');
var server = http.createServer();
function handleRequest(req, res){

	res.writeHead(200, {'content-type': 'text/plain'});
	res.write('Hello World~~');
	res.end();
}

server.on('request', handleRequest);
server.listen(9090);