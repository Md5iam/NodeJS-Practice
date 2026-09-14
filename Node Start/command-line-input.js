const http = require('http')
const arg = process.argv;

const port = arg[2]; 

http.createServer((req,response)=>{
  response.write("Dynamic port changes")
  response.end();
}).listen(port);