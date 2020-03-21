const fs = require('fs')
/**
 * 读取图片并且复制一份，有时候读取的东西可能非常的大，不适合使用buffer暂存这个缓冲区
 */
//创建读取流
const rs = fs.createReadStream('./desk_002.jpg')

const ws = fs.createWriteStream('./favicon.ico')

//合并
rs.pipe(ws)

