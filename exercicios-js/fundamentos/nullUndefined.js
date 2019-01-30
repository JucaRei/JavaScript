//atribuição por referencia , so indica/aponta para o mesmo lugar na memoria onde o objeto esta armazenado
//atribuição por valor e atribuição por referencia
const a = {name: 'Teste'}
console.log(a)

const b = a
console.log(b)

b.name = 'seila'
console.log(b)
console.log(a)
// os 2 apontam pro mesmo local de memória (atribuição por referencia)



let c = 3
let d = c

d++
console.log(d)  //copia por valor


//----------------------------------------------------------------------------------------------------------------------


let valor // não inicializada
console.log(valor)      // undefined

valor = null // ausência de valor,  não está apontando para nenhum endereço de memória
console.log(valor)
//console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)