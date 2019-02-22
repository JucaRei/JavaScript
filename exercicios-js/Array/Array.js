// Em JS array é um objeto
console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']      // array é uma estrutura indexada
console.log(aprovados[0])                 // acessando o primeiro elemento do array
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)
console.log(aprovados)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados[8] === null)

console.log(aprovados)
aprovados.sort()            // ordenar o array
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados)

//-------------------------------------------------------------------

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 0, 'Elemento1', 'Elemento2')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana'] 
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')    // serve para adicionar elemntos num determinado indice; pode remover elementos de um array; ou tambem remover e adicionar elemetos ao mesmo tempo
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1)
console.log(aprovados)