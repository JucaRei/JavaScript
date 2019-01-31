const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' // ternario tem 3 operadores
// nota >= 7 ? 'Aprovado' : 'Reprovado' , operador ternario equivalente a função , por ex: if e else

console.log(resultado(7.1))
console.log(resultado(6.7))

// operador ternario é em 3 partes: a primeira é uma expressão que vai retornar verdadeiro ou falso nota >= 7 ?
// segunda parte  'Aprovado' : 'Reprovado' 