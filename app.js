const http = require("http");
const port = process.env.PORT || 5000;
const getRequestData = require("./utils");
const todos = require("./todos");

const server = http.createServer(async (req, res) => {
	// get
	if (req.url === "/api/v1/todos" && req.method === "GET") {
		res.writeHead(200, {
			"content-type": "application/json",
		});
		res.end(JSON.stringify(todos));

		// post
	} else if (req.url === "/api/v1/todos" && req.method === "POST") {
		let reqBody = await getRequestData(req);
		todos.push(JSON.parse(reqBody));
		res.writeHead(201, {
			"content-type": "application/json",
		});
		res.end(JSON.stringify(JSON.parse(reqBody)));
	}
});

// const server = http.createServer((, responce) => {
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
