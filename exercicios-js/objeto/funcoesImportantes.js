const pessoa = {
    nome: 'Rebeca',
    idade: 12,
    peso: 39
} 

console.log(Object.keys(pessoa))    // pega todas as chaves do objeto pessoa
console.log(Object.values(pessoa))  // pega todos os valores do objeto pessoa
console.log(Object.entries(pessoa))      // pegar lista tanto das chaves quanto valores // entries são os registros
// array com todos os sub-arrays , que vai ter a chave e o valor

console.log("------------------------------------------------")
Object.entries(pessoa).forEach(e =>{    // percorrer os elementos
    console.log(`${e[0]}: ${e[1]}`)     // chave-valor
})

console.log("------------------------------------------------")

// destructuring    - desestruturando os elementos de um array
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

//definir uma propriedade de um objeto e pode definir algumas caracteristicas de alguma propriedade
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: false,       // se ela é passivel de ser listada
    writeable: false,        // pode ser modificada
    value: '01/01/2019'
})  //parecido com o freeze

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))