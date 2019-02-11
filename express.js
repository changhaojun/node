const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    res.end('请求主页数据');
})

app.listen(8081, () => console.log('Server running at http://127.0.0.1:8081/'));

