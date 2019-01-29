const valores = [7.7, 8.9, 6.3, 9.2] // array em javascript é uma estrutudo indexada , heterogenea
console.log(valores[0], valores[3])
console.log(valores[4]) // em javascript se não tem o elemento , ele não gera erro, mas coloca como undefined

valores[4] = 10
console.log(valores)
console.log(valores.length) // quanto elementos

valores.push({id: 3}, false, null, 'teste') // adiciona elementos ao array
console.log(valores)

console.log(valores.pop()) // pop tira o ultimo valor do array
delete valores[0] // tira uma atributo de dentro do objeto
console.log(valores)

console.log(typeof valores) // em javascript o array é do tipo objeto
