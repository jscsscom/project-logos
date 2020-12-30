const fs = require('fs')

const valid = name => {
    return ['.svg','.png'].indexOf(name.substr(name.length - 4, 4)) > -1
}

const index = async () => {
    let list = fs.readdirSync('./public/logos')

    list = list.filter(item=>valid(item))

    let data = {
        lastUpdated: new Date().getTime(),
        total: list.length,
        list: list
    }

    fs.writeFileSync('data/data.json', JSON.stringify(data, null,'\t'))
}

exports.index = index

