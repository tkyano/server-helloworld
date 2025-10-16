// portia's code
var http = require("http");
const port = process.env.PORT || 3001;

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello World!");
  })
  .listen(port);

// then go into browser and type in localhost:3001
// the 3001 is from above "const port = process.env.PORT || 3001;"