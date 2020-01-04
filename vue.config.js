
const path = require('path')

function resolve(dir){
  return path.join(__dirname,dir)
}

module.exports = {
  publicPath:'/',
  outputDir: 'dist/',
  lintOnSave: false,
  // chainWebpack: config =>{
  //    config.resolve.alias.set('@comp',resolve('src/components'));
  // }

}