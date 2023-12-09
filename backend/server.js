const express = require('express');
const { rmSync } = require('fs');
const app = express();

app.get('/', (req, res, next) => {
  res.status(200).send('hellow wordl');
});

app.get('/hellow', (req, res, next) => {
	res.setHeader("content-type","application/json");
    res.setHeader("Access-Control-Allow-Origin","*");
    
    return res.send(JSON.stringify('hello wordl'));
  });

let port = 8081;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
