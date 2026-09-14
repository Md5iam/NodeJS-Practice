const http = require('http')

http.createServer((req,response)=>{
  response.setHeader("Content-Type", "text/html")
  response.write(`
    <html>
      <head>
        <body>
          <h1>Hello this is html </h1>
        </body>
      </head>
    </html>
    `)
  response.end();
}).listen(4800);