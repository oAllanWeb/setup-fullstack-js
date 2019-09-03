const express = require('express');

const PORT = 9000;
const HOST= '0.0.0.0';

const app =  express();

app.get('/', (req,res) => {
  res.send("Ola Mundodsfd sdf ")
});

app.listen(PORT, HOST);