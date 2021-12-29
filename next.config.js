const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withPWA = require('next-pwa')
module.exports = withPWA(withCSS(withSass({
  webpack(config, options) {
    config.resolve.alias['~'] = __dirname + '/src'
    config.resolve.alias['@'] = __dirname + '/src/components'
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 300000,
          name: '[name].[ext]',
          esModule: false,
        }
      }
    })
    return config
  },
  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV,
    API_URL: process.env.API_URL
  },
  trailingSlash: true,
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public'
  }
})))