// const express = require('express');
import express from 'express';
const app = express();
import home from "./pages/home.js"

app.listen(3200);

app.get("", (req , res)=>{
  res.send("<h1> Siam Ahmed </h1>")
})
app.get("/home", (req , res)=>{
  res.send(home())
})