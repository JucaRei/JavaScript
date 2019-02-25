Array.prototype.filter2 = function(callback) {
    const newArray = []     // cria um novo array
    for (let i = 0; i < this.length; i++){      //percorre o array do inicio ao fim
        if(callback(this[i], i, this)){
            newArray.push(this[1])
        }
    }
    return newArray
}

const produtos = [
    { nome: 'Celular Samsung S8', preco: 1800, fragil: true},
    { nome: 'Macbook Pro', preco: 6000, fragil: true},
    { nome: 'Ipad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plastico', preco: 18.99, fragil: false}
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))

// O "this" serve para apontar para o próprio objeto. Isso garante a segurança de que você estará mexendo sempre com o objeto correto.