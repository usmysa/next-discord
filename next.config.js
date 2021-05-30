const path = require('path')

module.exports = {
  images: {
    loader: 'imgix',
    path: 'https://cdn.discordapp.com/',
  },
  webpack(config, options) {
    config.resolve.alias['@'] = path.join(__dirname, './')
    return config
  },
}