const http = require('http');
const url = require('url');
const router = require('./router');
const fs = require('fs');


http.createServer(function(req, res) {
    const pathname = url.parse(req.url).path;
    router(pathname);
    fs.readFile(pathname.substr(1), function(err, data) {
        if(err) {
            console.log(err);
            res.writeHead(404, {'Content-Type': 'text/html'})
        }else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data.toString()); // 响应文件内容
        }
        res.end(); //发送响应数据
    })
}).listen(7001);
console.log("Server has started.");
console.log('Server running at http://127.0.0.1:7001/');

