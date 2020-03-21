const http = require('http')
const fs = require('fs')

http.createServer((req,res)=>{
    console.log('http serve')
    // console.log('res',getPrototype(res))
    const {url,method,headers} = req
    if(url=='/'&& method == 'GET'){
        fs.readFile('index.html',(err,data)=>{
            if(err){
                res.writeHead(500,{'Content-Type':'text/plain;charest=utf-8'})
                res.end('服务器出错啦')
            }else{
                res.statusCode = 200
                res.setHeader('Content-Type','text/html')
                res.end(data)
            }
        })
    }else if(url=='/user'&& method == 'GET'){
        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify({"name":'node'}))
    }else if(method == 'GET'&& headers.accept.indexOf('image/*')!==-1){
        //图片过大需要流
        console.log(fs.createReadStream('.'+url))
        fs.createReadStream('.'+url).pipe(res)
    }
    // res.end('http serve')
}).listen(3000,()=>{
    console.log('服务器启动成功')
})

function getPrototype(obj){
    // console.log(obj)
    const list = []
    while(obj=Object.getPrototypeOf(obj)){
        list.push(obj)
    }
    return list
}