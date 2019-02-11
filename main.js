/*
1.引入 events
2.绑定事件及处理程序
3.触发事件 
*/

const events = require('events'); // 1

const eventEmitter = new events.EventEmitter();
eventEmitter.on('connection', eventHandler); // 2
function eventHandler() {
    console.log('连接成功');
    eventEmitter.emit('data_received') // 触发事件 data_received    对于每一个事件，eventEmitter 支持若干个事件监听器
}
eventEmitter.on('data_received', function() {
    console.log('数据接收成功1');
})
eventEmitter.on('data_received', function() {
    console.log('数据接收成功2');
})
eventEmitter.emit('connection'); // 3






// Node 应用程序工作    执行异步操作的函数将回调函数作为最后一个参数， 回调函数接收错误对象作为第一个参数
const fs = require('fs');

fs.readFile('input.txt', function(err, data) {
    if(err) {
        console.log(err.stack);
        return;
    }
    console.log('异步读取：', data.toString());
})
console.log('程序执行完毕');






