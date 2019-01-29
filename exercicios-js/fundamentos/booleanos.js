let isAtivo = false
console.log(isAtivo)

// let sempre que preciso alterar o valor da variável

isAtivo = true
console.log(isAtivo)

isAtivo = 1     // javascript tambem aceita 0 e 1 como valor booleano , diferentemente de java , que é somente true or false
console.log(!!isAtivo) // colocando 2 vezes a negaçaão (!!), ele passa a ser verdadeiro
console.log(!isAtivo) // colocando 1 vez a negação (!) ele passa a ser falso

console.log('os verdadeiros...')
console.log(!!3) //forçando uma conversão para verdadeiro ou falso
console.log(!!-1)
console.log(!!' ') // basta ter um espaço em branco que ja funciona
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))
console.log(!!(isAtivo = Infinity))

console.log('os falsos...')
console.log(!!0)
console.log(!!'') // se a string estiver vazia é falso
console.log(!!null)
console.log(!!NaN) // Not a number também é falso
console.log(!!undefined) 
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' '))
console.log(!!('' || null || 0 || 'opa' || 123))

let nome = ''

console.log(nome || 'Desconhecido')

nome = 'Juca'
console.log(nome || 'Desconhecido')