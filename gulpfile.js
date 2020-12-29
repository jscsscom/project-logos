const fs = require('fs')

const index = async () => {
    let list = fs.readdirSync('./public/logos')

    let data = {
        lastUpdated: new Date().getTime(),
        total: list.length,
        list: list
    }

    fs.writeFileSync('data/data.json', JSON.stringify(data, null,'\t'))
}

exports.index = index

