module.exports = function(...nomes){   //argumento variavel; ou seja você vai poder passar quantos nomes você quiser //lista de nomes   
    return nomes.map(nome => `Boa semana ${nome}!` )         //transforma em uma lista de saudações
}

//map pode criar um array a partir de uma função