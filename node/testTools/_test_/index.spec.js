const fs = require('fs')
test('集成测试 测试生成测试代码文件',()=>{
    //准备环境
    //删除测试文件夹
    fs.rmdirSync(__dirname+'/data/_test_',{
        recursive: true
    })
    const src = new (require('../index'))()
    src.getJestSource(__dirname+'/data')
})

test('测试代码生成工具',()=>{
    const src = new (require('../index'))()
    const res = src.getTestFileName('/abc/class.js')
    console.log('getTestFileName:',res)
    expect(res).toBe('/abc/_test_/class.spec.js')
})

test('测试代码生成',()=>{
    const src = new (require('../index'))()
    const res = src.getTestSource('fun','class')
    console.log('res',res)
    expect(res).toBe(`
            test('TEST fun',()=>{
                const fun = require('../class')
                const ret = fun()
            })
        `)
})

