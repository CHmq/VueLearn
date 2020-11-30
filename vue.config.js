// 配置路径别名，vue打包会自动合并
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'network':'@/network',
                'components': '@/components',
                'pages:': '@/pages'
            }
        }
    }
}