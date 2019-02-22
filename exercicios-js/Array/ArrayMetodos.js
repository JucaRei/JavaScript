const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()  //massa quebrou o carro!     // remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen')  // Adiciona um novo elemento, dentro do array na ultima posição
console.log(pilotos)

pilotos.shift()     // remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton')    // adiciona um elemento na primeira posição de indice 0
console.log(pilotos)

//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)   // massa quebrou :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)         // retorna um novo array, no caso a partir do indice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)
