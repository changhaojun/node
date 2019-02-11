const express = require('express');
const app = express();
const fs = require('fs');

app.get('/listUsers', function(req, res) { // 获取用户列表
    fs.readFile(__dirname + '/users.json', 'utf8', function(err, data) {
        if(err) {
            return console.error(err);
        }
        data = JSON.parse(data);
        console.log('list:::', data)
        res.send(data);
    })
})

const user4 = {
    name: 'mohit',
    password: 'password4',
    profession: 'teacher',
    id: 4
}
app.post('/addUser', function(req, res) { // 添加用户
    fs.readFile(__dirname + '/users.json', 'utf8', function(err, data) {
        if(err) {
            return console.error(err);
        }
        data = JSON.parse(data);
        data['user4'] = user4;
        console.log('data:', data);
        res.send(data);
    })
})

app.get('/:id', function(req, res) { // 显示用户详情
    fs.readFile(__dirname + '/users.json', 'utf-8', function(err, data) {
        if(err) {
            return console.error(err);
        }
        data = JSON.parse(data);
        const user = data['user' + req.params.id];
        console.log(user);
        res.send(user);
    })
})

app.listen(8081, function() {
    console.log('Server running at http://127.0.0.1:8081/');
})
