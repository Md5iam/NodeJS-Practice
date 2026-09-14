const http = require('http')

const userData=[
  {
    name:"siam",
    age:30,
    email:"siam@gmail.com"
  },
  {
    name:"fahim",
    age:10,
    email:"fahim@gmail.com"
  },
  {
    name:"juton",
    age:20,
    email:"juton@gmail.com"
  },
]
http.createServer((req,response)=>{
  response.setHeader("Content-Type", "application/json")
  response.write(JSON.stringify(userData));
  response.end();
}).listen(6100);