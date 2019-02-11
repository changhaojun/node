/*
1.创建Buffer类
2.写入缓存区    返回实际写入的大小
3.读取缓存区数据    解码缓冲区数据并使用指定的编码返回字符串
*/

buf = Buffer.alloc(256) // 创建一个长度为 256 的 Buffer
len = buf.write('www.runoob.com'); 
console.log('写入字节数：', len)

console.log('读取缓存区的数据：', buf.toString());


