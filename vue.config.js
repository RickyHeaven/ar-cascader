const compressionPlugin = require("compression-webpack-plugin")

module.exports = {
  devServer: {
    open: true
  },
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      return {
        output: {
          libraryExport: 'default'
        },
        externals: {
          vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
          },
          'view-design': {
            root: 'ViewUI',
            commonjs: 'view-design',
            commonjs2: 'view-design',
            amd: 'view-design'
          }
        },
        plugins: [
          new compressionPlugin({
            test: /\.js$|\.html$|\.css/, //匹配文件名
            threshold: 10240, //对超过10kb的数据进行压缩
            deleteOriginalAssets: false //是否删除原文件
          })
        ]
      }
    }
    else {
      return {
        output: {
          libraryExport: 'default'
        },
        plugins: [
          new compressionPlugin({
            test: /\.js$|\.html$|\.css/, //匹配文件名
            threshold: 10240, //对超过10kb的数据进行压缩
            deleteOriginalAssets: false //是否删除原文件
          })
        ]
      }
    }
  },
  
  productionSourceMap: false
}