// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade} = pessoa  //destructing
console.log(nome, idade)

const { nome: n, idade: i } = pessoa //criei uma variavel para nome e idade
console.log(n, i) 

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada) //undefined , variavel nao existe ou nao foi definida

const {endereco: { logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

const {conta: { ag, num } } = pessoa
console.log(ag, num) // undefined / null