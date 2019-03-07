// Arrow Function (funções anonimas)  // função arrow quando não tem parametro , implicitamente ele tem retorno(return)
const soma = (a, b) => a + b
console.log(soma(2, 3))

const soma1 = (a, b) => {        // não tem parametros
    return a + b                // explicitamente tem que colocar o retorn
}
console.log(soma1(2, 3))

// Arrow Function (this)   //this varia de acordo com a chamada
const lexico1 = () => console.log(this === exports) // função escrita de um modulo(arquivo do novo), o this vai apontar para exports(module.exports)
const lexico2 = lexico1.bind({}) // mesmo tentando apontar para 1 outro objeto , não vai ser possível 
lexico1()
lexico2()  // continua apontando para exports

// parametro default (encima de um atributo ou uma função voce definir um valor padrão pra ele)
function log(texto = 'Node') {   // valor padrão de texto
    console.log(texto)
}

log()   //assumiu o valor padrão
log('Sou mais forte')   

// operador rest/spread
function total(...numeros) {   // são agrupados em um array
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))