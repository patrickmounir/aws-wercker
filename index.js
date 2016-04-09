var http = require('http');

var PORT = process.env.PORT || 80;
var IP = process.env.IP || '0.0.0.0';

function handleRequest(request, response) {
	response.end(`This deployment is deployed by draz`);
}

var server = http.createServer(handleRequest);

server.listen(PORT, IP, function() {
	console.log(`Server listening on http://${IP}:${PORT}`);
});