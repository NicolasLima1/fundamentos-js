const produtos = [

    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

produtos.filter(function(p){
    return p.preco > 100
})

const fragil = produto => produto.fragil

const caro = produto => produto.preco > 100


console.log(produtos.filter(caro).filter(fragil))

