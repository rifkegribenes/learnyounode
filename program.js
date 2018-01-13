const http = require("http");
const url = require("url");

const port = process.argv[2];

const unixtime = (time) => {
 return { unixtime: time.getTime() };
}

const parsetime = (time) => {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  };
}

http.createServer((req, res) => {
  const urlObject = url.parse(req.url, true);
  const pathname = urlObject.pathname;
  const time = new Date(urlObject.query.iso);
  let result;

    if (pathname === '/api/unixtime') {
      result = unixtime(time);
    } else if (pathname === '/api/parsetime') {
      result = parsetime(time);
    }
    if (result) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(result));
    } else {
      res.writeHead(404);
      res.end();
    }
  }).listen(port);