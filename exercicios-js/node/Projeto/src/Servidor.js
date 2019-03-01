const porta = 3003

const express = require('express')
const app = express()    // instanciar express e atribuir para a variavel app
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true }))      // faz um parse no body da requisição


// app.get('/produtos', (req, resp, next) =>{
//     console.log('Middleware 1...')
//     next()  // passar pro proximo
// })

// app.use((req, resp, next) =>{
//     resp.send({ nome: 'Notebook', preco: 123.45})   // será convertido para o formato JSON automaticamente
// })

//app.get('/produtos', (req, resp, next) =>{
    //resp.send({ nome: 'Notebook', preco: 123.45})   // será convertido para o formato JSON automaticamente
//})


app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())             //obter a lista de produtos    
})

app.get('/produtos/:id', (req, res, next) => {     // acesso ao parametro na request // tbm recebe uma requisição middleware
    res.send(bancoDeDados.getProduto(req.params.id))          // obter parâmetros de requisicao
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({                   // salva
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)       //JSON // retorna a const produto (save)
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // JSON
})

app.listen(porta, () => {        // qual porta que a aplicação vai ficar escutando , e chama uma callback pra mostrar no console que de fato ele conseguiu starta a aplicação
    console.log(`Servidor está executando na porta ${porta}.`)
})