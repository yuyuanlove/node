const {promisify} = require('util')
module.exports.clone = async function(downUrl,desc){
    const download = promisify(require('download-git-repo'))
    const ora = require('ora')
    const process = ora(`下载中... ${downUrl}`)
    process.start()
    await download(downUrl,desc)
    process.succeed()
}