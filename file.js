const fs = require('fs');

// 异步读取
fs.readFile('input.txt', function(err, data) {
    if(err) {
        return console.error(err)
    }
    console.log('异步读取：', data.toString());
})

// 同步读取
const data = fs.readFileSync('input.txt');
console.log('同步读取：', data.toString());

console.log('程序执行完毕');

//写入文件
fs.writeFile('input.txt', function(err) {
    if(err) {
        return console.error(err);
    }
    console.log('数据写入成功');
})