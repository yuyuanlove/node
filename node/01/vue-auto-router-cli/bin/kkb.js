#!/usr/bin/env node

const program = require('commander')

program.version(require('../package.json').version)

program
    .command('init <name>')
    .description('init project')
    .action(require('../lib/init'))
program.parse(process.argv)

//使用 kkb init test

//安装依赖
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