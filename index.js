var http = require('http');

var PORT = process.env.PORT || 3000;
var IP = process.env.IP || '0.0.0.0';

function handleRequest(request, response) {
	response.end(`This app is deployed by Patrick`);
}


var server = http.createServer(handleRequest);

server.listen(PORT, IP, function() {
	console.log(`Server listening on http://${IP}:${PORT}`);
});