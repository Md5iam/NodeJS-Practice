const http = require('http');
const fs = require('fs');

http.createServer((req, response) => {

  if (req.url == '/') {
 
    fs.readFile("html/home.html", 'utf-8', (error, data) => {

      if (error) {
        response.writeHead(500, { "Content-Type": "text/plain" });
        response.end("Internal server error");
        return;
      }

      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(data);
    });

  } else if (req.url == '/style') {

    fs.readFile("html/style.css", 'utf-8', (error, data) => {

      if (error) {
        response.writeHead(500, { "Content-Type": "text/plain" });
        response.end("CSS not found");
        return;
      }

      response.writeHead(200, { "Content-Type": "text/css" });
      response.end(data);
    });

  } else {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.end("Page not found");
  }

}).listen(3200);