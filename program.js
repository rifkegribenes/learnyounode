const http = require("http");
const fs = require("fs");

const file = process.argv[3];
const port = process.argv[2];

http.createServer((req, res) => {
  res.writeHead(200, { 'content-type' : 'text/plain' });
  fs.createReadStream(file).pipe(res);
}).listen(port);