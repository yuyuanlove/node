const buf1 = Buffer.alloc(10)

const buf2 = Buffer.from('a') //不能是数字

const buf3 = Buffer.from('你好')

const buf4 = Buffer.concat([buf2,buf3])

console.log(buf1)
console.log(buf2.toString())
console.log(buf3.toString())
console.log(buf4.toString())

/**
 * 主要是处理为了处理二进制文件
 * Buffer 类是一个全局变量，用于直接处理二进制数据
 */

