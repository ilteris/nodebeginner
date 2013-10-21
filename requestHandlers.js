function start() {
	console.log("request handler for 'start' was called ");
}

function upload() {
	console.log("request handler for 'upload' was called");
}

exports.start  = start;
exports.upload = upload;

