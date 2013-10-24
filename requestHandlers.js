var exec = require("child_process").exec;

function start(response) {
	console.log("request handler for 'start' was called ");
    exec("ls -lah", function(error, stdout, stderr) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(stdout);
        response.end();
    });
}

function upload(reponse) {

	console.log("request handler for 'upload' was called");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello Upload");
	response.end();
}

exports.start  = start;
exports.upload = upload;

