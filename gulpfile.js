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

const updateSvgData = async () => {
    svgsData.list = svgs
    svgsData.total = svgs.length
    svgsData.updateTime = new Date().getTime()
    await fs.writeFileSync('data/svgs.json', JSON.stringify(svgsData, null, "\t"))
}

const convertSvg = async (svg) => {
    await svgAttrs.file('svgs/' + svg, async (err, attrs) => {
        if (err) {
            console.log(err)
        } else {

            let name = svg.substr(0, svg.length - 4) + '.png'

            if (logosData.list.indexOf(name) === -1) {
                await svg2img(
                    'svgs/' + svg,
                    {
                        width: attrs.width * limit / attrs.height,
                        height: limit,
                        preserveAspectRatio: true,
                    },
                    async (error, buffer) => {
                        if (error) {
                            console.log(error)
                        } else {
                            logosData.list.push(name)
                            console.log('converted: ' + name)
                            await updateLogoData()
                            await fs.writeFileSync('logos/' + name, buffer)
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

const updateLogoData = async () => {
    logosData.updateTime = new Date().getTime()
    logosData.total = logosData.list.length
    await fs.writeFileSync('data/logos.json', JSON.stringify(logosData, null, "\t"))
}

const resetLogoData = async () => {
    logosData.updateTime = new Date().getTime()
    logosData.total = 0
    logosData.list = []
    await fs.writeFileSync('data/logos.json', JSON.stringify(logosData, null, "\t"))
}

exports.convert = series(readSvgs, parallel(updateSvgData, convertSvgs))
exports.clear = resetLogoData