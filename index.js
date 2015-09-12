var http = require('http');

const PORT = process.env.OPENSHIFT_NODEJS_PORT || 8000;
const IP = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

function handleRequest(request, response) {
	response.end(`Web server running on Node.js v${process.versions.node} deployed with Travis CI.`);
}

var server = http.createServer(handleRequest);

server.listen(PORT, IP, function() {
	console.log(`Server listening on http://${IP}:${PORT}`);
});