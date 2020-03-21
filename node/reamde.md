# 1.运行
// node 文件夹路径
# 2.自动重启
// yarn add nodemon -g
//nodemon 文件夹路径
# 3.单元测试jest
// yarn add jest -g
//注意要添加配置文件否则会踩坑
```
test('测试hello',()=>{
    const res = require('../index')
    //断言
    expect(res).toBe('lxy1')
    // console.log('helloworld',helloworld)
})
//通过jest helloworld --watch监听这个测试文件，直到测试为成功为止
```

# Demo：测试代码生成工具{
    1.掌握fs的同步方法
    2.path包
}