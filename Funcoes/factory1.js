// Factory simples

function criarProduto(nome, preco){
  return {
    nome,
    preco,
    desconto: 0.1
  }
}

console.log(criarProduto("tablet", 1000))