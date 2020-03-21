const path = require('path')
const fs = require('fs')

module.exports = class TestTools{

    //生成测试代码文件
    getJestSource(sourcePath = path.resolve('./')){
        const testPath = `${sourcePath}/_test_`
        if(!fs.existsSync(testPath)){
            fs.mkdirSync(testPath)
        }
        //遍历代码文件
        let list = fs.readdirSync(sourcePath)
        //添加完整路径
        list.map(item=>`${sourcePath}/${item}`) 
            .filter(item=>fs.statSync(item).isFile())
            .filter(item=>item.indexOf('.spec')===-1)
            .map(item=>this.getTestFile(item))

    }

    getTestFile(filename){
        console.log('filename',filename)
        const testFileName = this.getTestFileName(filename)
        if(fs.existsSync(testFileName)){
            console.log('该测试代码已存在',testFileName)
            return
        }
        const modu = require(filename)
        let source
        if(typeof modu ==='object'){
            source = Object.keys(modu)
                .map(item=>this.getTestSource(item,path.basename(filename),true))
                .join('\n')
        }else if(typeof modu === 'function'){
            const basename = path.basename(filename)
            source = this.getTestSource(basename.replace('.js',''),basename)
        }
        fs.writeFileSync(testFileName,source)
    }
    /*
        生成测试代码
    */
    getTestSource(methodName,classFile,isClass = false){
        console.log('getTestSource',methodName)
        return `
            test('${'TEST '+ methodName}',()=>{
                const ${isClass ? '{'+methodName+'}':methodName} = require('${'../'+classFile}')
                const ret = ${methodName}()
            })
        `
    }

    /*
        生成测试文件名
    */
    getTestFileName(filename){
        const dirname = path.dirname(filename)
        const basename = path.basename(filename)
        const extname = path.extname(filename)
        const testName = basename.replace(extname,`.spec${extname}`)
        return path.format({
            root: dirname + '/_test_/',
            base: testName
        })
    }
}