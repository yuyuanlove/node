const fs = require('fs')

const res = fs.readFileSync('data.txt')

fs.readFile('data.txt',(err,data)=>{
    console.log(data.toString())
})

fs.readFile('dat.txt',(err,data)=>{
    console.log(err)
})

console.log('res',res.toString())

