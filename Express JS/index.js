const express = require('express');
const app = express();

app.listen(3200);

app.get("", (req , res)=>{
  res.send("<h1> Siam Ahmed </h1>")
})
app.get("/about", (req , res)=>{
  res.send("<h1> About Page </h1>")
})