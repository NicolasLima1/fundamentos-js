const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // unicode cod HTML
console.log(escola.indexOf("3"))

console.log(escola.substring(1)) // Pega a partir do endereço 1
console.log(escola.substring(0, 3)) // Começa do 0 e lança 3 endereços

console.log("Escola ".concat(escola).concat("!")) // Concatenação
console.log("Escola " + (escola) + ("!"))
console.log(escola.replace(3, 'e'))

console.log('Ana,Maria,Pedro'.split(','))
