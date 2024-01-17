//let e const
{
  var a = 2
  let b = 3
  console.log(b)
}
console.log(a)

//Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)

//Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

//Arrow function
const soma = (a, b) => a + b
console.log(soma(2, 3))

// Tagged template
function tag(partes, ...valores) {
  const resultado = []
  valores.forEach((valor, indice) => {
    valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
    resultado.push(partes[indice], valor)
  })

  return resultado.join('')
}
const preco = 29.99
const precoParcela = 11
console.log(tag`1x de ${preco} ou 3x de ${precoParcela}`)