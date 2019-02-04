const soma = function (x, y){           // função anônima com 2 parâmetros
    return x + y
}

const imprimirResultado = function(a, b, operacao = soma){
    console.log(operacao(a, b))         // como não passou 3 parametro , ele assume o default da função anonima
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y){
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y)

const pessoa = {        // função anônima dentro de um objeto
    falar: function () {
        console.log('Opa')
    }
}

pessoa.falar()