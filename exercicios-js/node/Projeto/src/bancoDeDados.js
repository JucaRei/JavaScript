//Banco de dados em memoria
const sequence = {
    _id: 1,         // _id é uma convenção
    get id() { return this._id++ }          // vai sempre retornar o proximo valor de id , quando fizer o sequence.id
}

const produtos = {}

function salvarProduto(produto) {
    if (!produto.id) produto.id = sequence.id       // se o produto não estiver setado , ele vai receber
    produtos[produto.id] = produto                  // se o produto ja tiver setado ele substitui pela versão mais nova, caso não esteja setado ele adiciona um novo produto dentro de produtos
    return produto
}

function getProduto(id) {
    return produtos[id] || {}     // retorna produto , caso não encontre , retorne objeto vazio
}

function getProdutos() {
    return Object.values(produtos)          // quero retornar apenas os valores (produtos)
}

function excluirProduto(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto }          // exportar fora desse modulo