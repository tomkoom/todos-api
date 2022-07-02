// import todos from ('./todos.json') // in ES6

const http = require("http");
const port = process.env.PORT || 5000;
const todos = require("./todos.json");

const server = http.createServer((req, res) => {
	if (req.url === "/api/v1/todos" && req.method === "GET") {
		res.writeHead(200, {
			"content-type": "application/json",
		});
		res.end(JSON.stringify(todos));
	}
});

// const server = http.createServer((request, responce) => {
// 	responce.writeHead(200, {
// 		"content-type": "text/plain",
// 	});
// 	responce.end("Hello");
// });

server.listen(port, () => {
	console.log("Server is ready and running on Port ", port);
});

server.on("error", (err) => {
	if ((err.code = "EADRINUSE")) {
		console.log("Port already in use");
	}
});
