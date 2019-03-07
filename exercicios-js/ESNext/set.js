//set (estrutura de conjunto) estrutura não indexada, que não aceita repetição
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Internacional')
times.add('Vasco')  // não aceita repetição

console.log(times)  
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Internacional')
console.log(times.has('Internacional'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']         // não aceita repetição
const nomesSet = new Set(nomes)
console.log(nomesSet)