const produtos = [
    { nome: 'Celular Samsung S8', preco: 1800, fragil: true},
    { nome: 'Macbook Pro', preco: 6000, fragil: true},
    { nome: 'Ipad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plastico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p){
    //return p.preco > 100
    return false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))  // filtros encadeados

// filter eh uma funcao callback que retorna verdadeiro ou falso