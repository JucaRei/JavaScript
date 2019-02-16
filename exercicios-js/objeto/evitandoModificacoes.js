// Object.preventExtensions
// Não permite que o objeto seja extendido , pode ate excluir atributos; mas não pode adicionar novos objetos
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))
// ele permite você alterar os dados , o que não permite é criar novos atributos, novas chaves e valores
produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal  (selar) // não consegue adicionar novos atributos, não consegue excluir, mas consegue modificar os valores dos atributos do objeto
const pessoa = {nome: 'Joana', idade: 18}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Rocha'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = selado + valores constantes