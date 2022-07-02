const http = require("http");
const port = process.env.PORT || 5000;

const server = http.createServer((request, responce) => {
	responce.writeHead(200, {
		"content-type": "text/plain",
	});
	responce.end("Hello");
});

server.listen(port, () => {
	console.log("Server is ready and running on Port ", port);
});

server.on("error", (error) => {
	if ((error.code = "EADRINUSE")) {
		console.log("Port already in use");
	}
});
