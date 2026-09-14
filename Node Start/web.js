const http = require('http')
const fs = require('fs');

http.createServer((req,response)=>{
  fs.readFile('html/web.html', 'utf-8', (err,data)=>{
    if(err){
      response.writeHead(500, {"Content-Type": "text/plain"})
      response.write("internal server error");
      response.end();
      return
    }
    response.writeHead(200, {"Content-Type": "text/html"})
    response.write(data);
    response.end();
  })
}).listen(4800);