module.exports = function (api) {
  console.log(`Babel is compiling in ${api.env()} environment.`)
  api.cache.using(() => process.env.NODE_ENV)
  return {
    presets: ['@babel/preset-env', '@babel/preset-typescript'],
    plugins: [
      '@babel/plugin-transform-runtime',
      '@babel/proposal-class-properties',
    ],
  }
}
