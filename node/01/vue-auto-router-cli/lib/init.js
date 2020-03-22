const {promisify} = require('util')
const figlet = promisify(require('figlet'))

const clear = require('clear')  //清空
const chalk = require('chalk') // 更改颜色
const log = content =>console.log(chalk.green(content))
const {clone} = require('./download')
const open = require('open')
module.exports = async name =>{
    //打印欢迎界面
    clear()
    const data = await figlet('KKB Welcome')
    log(data)
    //克隆
    await clone('yuyuanlove/vueElementAdmin',name)

    //安装依赖
    log('安装依赖中...')
    await spawn('yarn',['install'],{cwd:`./${name}`})

    log(`
============
安装ok
============
    `)

    //打开游览器
    log('打开游览器...')
    open('http://localhost:8080')
    await spawn('yarn',['serve'],{cwd:`./${name}`})

    function spawn(...args){
        const {spawn} = require('child_process')
        return new Promise(resolve => {
            const proc = spawn(...args)
            //子进程的输出流
            proc.stdout.pipe(process.stdout)
            proc.stderr.pipe(process.stderr)
            proc.on('close',()=>{
                resolve()
            })
        })
    }

}