const {series, parallel} = require('gulp')

const fs = require('fs')
const svg2img = require('svg2img')
const svgAttrs = require('svg-attrs')

const limit = 200

let svgsData = require('./data/svgs.json')
let logosData = require('./data/logos.json')

let svgs = []

const readSvgs = async () => {
    svgs = await fs.readdirSync('./svgs')
}

const convertSvg = async (svg) => {
    await svgAttrs.file('svgs/' + svg, async (err, attrs) => {
        if (err) {
            console.log(err)
        } else {

            let name = svg.substr(0, svg.length - 4)

            if (logosData.list.indexOf(name) === -1) {
                await svg2img(
                    'svgs/' + svg,
                    {
                        width: attrs.width * limit / attrs.height,
                        height: limit,
                        preserveAspectRatio: true,
                    },
                    (error, buffer) => {
                        if (error) {
                            console.log(error)
                        } else {
                            logosData.list.push(name)
                            console.log('converted: ' + name)
                            fs.writeFileSync('logos/' + name + '.png', buffer)
                        }
                    }
                )
            }

        }
    })
}

const convertSvgs = async () => {
    for (const svg of svgs) {
        await convertSvg(svg)
    }
}

const resetLogoData = async () => {
    logosData.updateTime = new Date().getTime()
    logosData.total = 0
    logosData.list = []
    await fs.writeFileSync('data/logos.json', JSON.stringify(logosData, null, "\t"))
}

const updateLogoData = async () => {
    let logoList = fs.readdirSync('./logos')
    logoList = logoList.map(item => item.substr(0, item.length - 4))
    logosData.list = logoList
    logosData.updateTime = new Date().getTime()
    logosData.total = logoList.length
    fs.writeFileSync('data/logos.json', JSON.stringify(logosData, null, "\t"))
}

const updateSvgData = async () => {
    let svgList = fs.readdirSync('./svgs')
    svgList = svgList.map(item => item.substr(0, item.length - 4))
    svgsData.list = svgList
    svgsData.updateTime = new Date().getTime()
    svgsData.total = svgList.length
    fs.writeFileSync('data/svgs.json', JSON.stringify(svgsData, null, "\t"))
}

exports.convert = series(readSvgs, convertSvgs)
exports.clear = resetLogoData
exports.update = parallel(updateSvgData, updateLogoData)