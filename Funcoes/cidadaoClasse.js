//criar de forma literal
function fun1() { }

//criar dentro de uma variável
const fun2 = function () { }

//armazenando na array
const array = [function(a, b){return a + b}, fun1, fun2]
console.log(array[0](2, 3))

//armazenar em um atributo de objeto
const obj = {}

obj.falar = function (){return "Opa"}

console.log(obj.falar())