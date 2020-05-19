/*
 * @Author: your name
 * @Date: 2020-05-13 15:08:25
 * @LastEditTime: 2020-05-19 11:33:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /toy-browser/server.js
 */ 

const http = require('http');

const server = http.createServer((req, res) => {
  console.log('receive')
  // console.log(req);
  console.log(req.headers)
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('X-Foo', 'bar');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('okk');
});

server.listen(8088);