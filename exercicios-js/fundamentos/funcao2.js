//Armazenando uma função em uma variável const
const imprimirSoma = function  (a, b) {       //  função anônima( sem nome)
    console.log(a + b)
}

imprimirSoma (2, 3)

// Armazenando uma função arrow em uma variável
const soma = (a, b) => {    // essa => substitui o nome function, fica mais reduzida a forma de escrever uma função em JS
    return a + b
}

console.log(soma(2, 3))

// retorn implícito
const subtracao = (a, b) => a-b // como executa uma unica sentença de código o resultado será retornado
console.log(subtracao(10, 15))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')