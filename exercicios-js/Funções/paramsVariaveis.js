function soma (){
    let soma = 0
    for (i in arguments){     //arguments é um array interno de uma função  //arguments recuperar parametros dentro da função
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))

console.log(soma('n', 'p', 'a', "Teste"))
console.log(soma(1.1, 2.2, 3.3, "Teste"))