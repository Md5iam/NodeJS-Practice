const http = require('http')

http.createServer((req,response)=>{

  console.log(req.url)
  if ( req.url === "/"){
    response.write("root");
  }
  else if(req.url === "/login"){
    response.write("login");
  }
  else{
    response.write("Others");
  }
  response.end();
}).listen(5600);
