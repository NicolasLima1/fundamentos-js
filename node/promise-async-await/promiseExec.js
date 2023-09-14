function soma(numero) {

    return new Promise((resolve, reject) => {

        if (typeof numero != 'number') {

            reject('Erro, numero invalido')

        } else if (numero % 2 == 0) {

            resolve('Numero par')

        } else {

            resolve('Numero impar')
        }

    })
}

soma(2)
    .then((mensagem) => console.log(mensagem))
    .catch((erro) => console.error(erro))

soma(3)
    .then((mensagem) => console.log(mensagem))
    .catch((erro) => console.error(erro))


soma('a')
    .then((mensagem) => console.log(mensagem))
    .catch((erro) => console.error(erro))