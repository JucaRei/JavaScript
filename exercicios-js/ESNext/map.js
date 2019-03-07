// Map ( estrutura chave-valor que não aceita repetição na chave)
const tecnologias = new Map()
tecnologias.set('react', { framework: false})
tecnologias.set('angular', {framework: true})
console.log(tecnologias.react)  // jeito errado de acessar o map Tecnologias
console.log(tecnologias.get('react'))   // jeito correto
console.log(tecnologias.get('react').framework)   

const chavesVariadas = new Map ([    //array
    [function() { }, 'Função' ],     // função como chave e o valor é um texto
    [{}, 'Objeto'],    // objeto com chave , valor string
    [123, 'Número']    // chave é um numero , valor string
])

chavesVariadas.forEach((vl, ch)  => {    // acessa primeiro o valor e depois a chave
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))       //função has diz se o elemento está dentro ou não desse map
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)   // .size é para dizer quantos elementos estão dentro do map

chavesVariadas.set(123, 'a')   // não aceita repetição na chave
chavesVariadas.set(123, 'b')   // não aceita repetição na chave
console.log(chavesVariadas)
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)