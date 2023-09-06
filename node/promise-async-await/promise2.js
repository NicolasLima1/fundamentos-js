function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log('executando promise...')
            resolve()
        }, tempo)
    })
}


let p = esperarPor(3000)
    .then(() => esperarPor())
    .then(esperarPor)