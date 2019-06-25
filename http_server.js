const http = require('http');
const path = require('path');
const fs = require('fs');

const port = 3000;

const mimeTypes = {
  '.js': 'text/javascript',
  '.html': 'text/html',
  '.css': 'text/css',
};

const server = http.createServer((req, res) => {
  var lookup = path.basename(decodeURI(req.url)) || 'index.html',
  f = "";
  if (path.extname(lookup) === ".css") {
    f = path.resolve("css", lookup);
  } else if (path.extname(lookup) === ".js") {
    f = path.resolve("js", lookup);
  } else {
    f = lookup;
  }
  console.log(f);
  fs.exists(f, function (exists) {
    if (exists) {
      fs.readFile(f, function(err, data) {
        if (err) {
          res.writeHead(500);
          res.end("Server Error");
          return;
        }
        var headers = {'Cpntent-Type' : mimeTypes[path.extname(f)]};
        res.writeHead(200, headers);
        res.end(data);
      });
      return;
    }
    res.writeHead(404);
    res.end("Not found");
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
