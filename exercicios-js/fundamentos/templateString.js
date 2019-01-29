const nome = 'Rebeca'
const concatenacao = 'Olá' + nome + "!" 
const template = `
    Olá
    ${nome}!` // interpolação
console.log(concatenacao, template)
// template string você pode quebrar a linha
// sempre usa o simbolo da crase

// expressões....
console.log(`1 + 1 = ${1 + 1} `) 
// ele só soma dentro da expressão $

const up = texto => texto.toUpperCase()   // arrow function