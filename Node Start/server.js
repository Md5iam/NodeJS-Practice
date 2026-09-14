const http = require('http')

http.createServer((req,response)=>{
  response.write("<h1>Siam Ahmed <h1> </br>")
  response.end("Hello");
}).listen(4800);

http.createServer((req,response)=>{
  response.write("<h1>Other server <h1> </br>")
  response.end("Hello");
}).listen(5800);