const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')


new Promise(resolve => {

    fs.readFile(caminho, (_, conteudo) => {
        resolve(conteudo.toString())
    })


}).then(conteudo => console.log(conteudo))