process.env.VUE_APP_VERSION = require('./package.json').version
process.env.VUE_APP_CDN = 'https://cdn.jsdelivr.net/gh/jscsscom/project-logos'

module.exports = {
    publicPath: '',
    outputDir: 'docs',
}