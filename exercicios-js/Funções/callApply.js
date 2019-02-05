// outras maneiras de chamar uma função 
function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco            // criar um produto getPreco e associa a função getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())


const carro = {preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

// diferença entre call e apply , é so a passagem do parâmetros

console.log(getPreco.call(carro , 0.17, '$'))         // no call passa diretamente , os parâmetros que serão passados para a função // o primeiro sempre é o contexto e o resto dos parâmetros
console.log(getPreco.apply(global , [0.17, '$']))        // no apply passa o contexto do objeto ; e os outros dentro de um array