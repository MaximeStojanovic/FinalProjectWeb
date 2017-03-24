var http = require("http");
var fs = require("fs");

http.createServer(function (request, response) {
    fs.readFile("site_web/index.html", function (err, data) {
        response.writeHead(200, { "Content-Type": "text/html" });
        console.log("server loaded");
        response.write(data);
        response.end();
    });
}).listen(8888);
