const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  transpileDependencies: [],
  publicPath: isProd ? '/vue-sample/' : '',
  outputDir: 'dist',
  filenameHashing: false,
  productionSourceMap: false
}