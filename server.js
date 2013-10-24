var http = require("http");
var url = require("url");


function start(route, handle) { 
http.createServer(function(request, response) {
	var pathname = url.parse(request.url).pathname;
    console.log("Request " + pathname + " received ");
    route(handle, pathname);
    response.writeHead(200, {"Content-Type": "text/plain"});
    var content = route(handle, pathname);
    response.write("Hello world");
    response.end();
}).listen(8888);
console.log("server started")
}
exports.start = start;
