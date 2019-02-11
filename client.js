const http = require('http');

const options = {
    host: 'localhost',
    port: '7001',
    path: '/index.html'
}
const callback = function(res) {
    res.on('data', function(data) {
        console.log(data.toString());
    })
}

const req = http.request(options, callback);
req.end();

