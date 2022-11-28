
//Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(3, 2)
imprimirSoma(3)
imprimirSoma(2, 10, 3, 2, 6, 7, 1)
imprimirSoma()

//Funcao com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())