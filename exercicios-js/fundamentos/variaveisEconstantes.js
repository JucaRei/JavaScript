var a = 3
let b = 4  // pode criar variaveis com var e let , mais há diferenças

// de modo geral crie variaveis usando o let (mais moderno) , evito o uso de var

var a = 30
b = 40 

console.log(a, b)

// console.log é o Println do javascript/Emascript
// var você pode redeclarar duas vezes uma variavel , diferentemente de let

a = 300
b = 400

console.log(a, b)

const c = 5
// c = 50
console.log(c)
// const é uma constante

// var , let , const: são palavras reservadas do javascript
// o que você não ter motivo para mudar , comece com a palavra const
// precisa reatribuir um valor para uma variavel , use let

//const não se altera na variavel , mas pode se alterar no endereço

/**
 * Exemplo:
 * 
 *  const a = 30
    console.log(a)
    const b = { teste : 'A'}
    console.log(b)
     
    // A linha abaixo não vai funcionar e vai dar erro no seu código.
    const a = 20
    console.log(a) // o valor de a ainda é 30
    // A linha abaixo não vai funcionar e vai dar erro no seu código
    const b = {teste : 'B'}
    console.log(b) // será exibido ainda {teste: 'A'}
     
    //porém é possível fazer o seguinte:
    b.teste = 'B'
    console.log(b) // Será exibido {teste:'B'} pois não foi alterado o endereço de 'b'
 */