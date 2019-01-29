const escola = "Cod3r"

console.log(escola.charAt(4)) // letra no indice 4
console.log(escola.charAt(5)) //não gera um erro, ele simplesmente não encontra
console.log(escola.charCodeAt(3)) // pega o 3 na tabela ASCII , em unicode
console.log(escola.indexOf('3')) // pega o indice dele

console.log(escola.substring(1)) // vai a partir do indice determinado ate o final
console.log(escola.substring(0, 3))
console.log('Escola '.concat(escola).concat("!")) // concatenar
console.log('Escola '+ escola + "!")
console.log(escola.replace(3, 'e')) // substituir
console.log(escola.replace(/\d/, 'e')) // substitua todos os digitos do texto(Expressões Regulares - REGEX) pela letra 'e'
console.log(escola.replace(/\w/g, 'e')) // substitua todas as letras e digitos(Expressões Regulares - REGEX) pela letra 'e'

console.log('Ana,Maria,José'.split(',')) 
// converter/quebrar string em array , chama a função split e passa o que você quer usar com separador

console.log('Ana,Maria,José'.split(/./)) // regex
