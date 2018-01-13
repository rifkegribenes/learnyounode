const http = require("http");
const map = require("through2-map");

const file = process.argv[3];
const port = process.argv[2];

http.createServer((req, res) => {
  if (req.method !== 'POST') {
    return res.end('that wasn\'t a POST\n');
  }
  
  req.pipe(map(chunk => 
    chunk.toString().toUpperCase()
  )).pipe(res)
}).listen(port);