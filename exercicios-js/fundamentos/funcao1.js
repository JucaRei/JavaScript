//Função sem retorno

function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // NaN not a number
imprimirSoma(2, 4, 6, 6, 7) // pega somente os 2 primeiro numeros, o resto ele ignora
imprimirSoma() // NaN

// função com retorno
function soma(a, b = 1){ // defini que o valor padrão para b, isso é novo no EcmaScript de 2015
    return a + b    // retorna o resultado da função
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())