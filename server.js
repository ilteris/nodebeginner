var http = require("http");

function start() { 
http.createServer(function(request, response) {
    console.log("Requesting");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello world");
    response.end();
}).listen(8888);
console.log("server started")
}
exports.start = start;
