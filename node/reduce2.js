const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

console.log(alunos.map(a => a.bolsista).reduce(
    (resultado, bolsista) => resultado && bolsista
))

console.log(alunos.map(a => a.bolsista).reduce(
    (resultado, bolsista) => resultado || bolsista
))

const numero = [1, 2, 3]

const numero2 = numero.map((n) => {

    return 2 * n
})

console.log(numero2)