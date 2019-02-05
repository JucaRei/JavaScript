function criarProduto (nome, preco) {
    return {
        nome, 
        preco,
        desconto: 0.1
    }
    
}

console.log(criarProduto('Monitor 4k' , 4999.99))
console.log(criarProduto('Macbook Pro 15' , 6000.49))