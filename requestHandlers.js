function start() {
	console.log("request handler for 'start' was called ");
	return "Hello Start";
}

function upload() {
	console.log("request handler for 'upload' was called");
	return "Hello Upload";
}

exports.start  = start;
exports.upload = upload;

