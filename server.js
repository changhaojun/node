/*
1.引入required模块   
2.创建服务器
*/

const http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'}); // 发送http头部
    res.end('Hello World'); // 发送响应数据 'Hello World'
}).listen(7001); // 监听端口 7001
console.log('Server running at http://127.0.0.1:7001/');