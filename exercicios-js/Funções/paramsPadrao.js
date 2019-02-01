// estratégia 1 para gerar valor padrão
function soma1(a, b, c){
    a = a || 1      // sendo falso , o valor padrão vai retornar 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0,0))

// estrategia 2, 3 e 4 para gerar valor padrão
function soma2( a, b, c){
    a = a !== undefined ? a : 1  // se a for estritamente diferente de undefined, senão o valor é 1
    b = 1 in arguments ? b : 1 // dentro de arguments(existe o indice 1?), caso exista pegue o valor de b, senão pegue o valor de 1 // lembrando que arguments é por indice e sempre começa pelo 0
    c = isNaN(c) ? 1 : c // is not a number, se a variavel c é NaN , retorne o valor padrão, se for um numero retorne o valor de c
    return a + b + c
}
console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// valor padrão do ES2015
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}
console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))
