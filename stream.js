const fs = require('fs');

const data = '菜鸟教程官网地址：www.runoob.com';
const writeStream = fs.createWriteStream('output.txt');
writeStream.write(data, 'utf-8');
writeStream.end();
writeStream.on('finish', function() {
    console.log('写入完成');
})
writeStream.on('error', function() {
    console.log(err.stack);
})