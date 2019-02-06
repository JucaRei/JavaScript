// pessoa aponta para um endereço de memória    // pessoa -> 123 -> {...}
const pessoa = {
    nome: 'João'
}
pessoa.nome = 'Pedro' // não mudo a referencia , mas sim o dado pra onde aponta
console.log(pessoa)

//  pessoa -> 456 -> {...}
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa) // objeto congelado (você não consegue mais mexer no objeto)

pessoa.nome = 'Maria'
pessoa.end = 'Rua seila'
delete pessoa.nome

console.log(pessoa.nome) // Objeto continua o mesmo
console.log(pessoa)

const pessoaConstante = Object.freeze({
    nome: 'João'
})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)