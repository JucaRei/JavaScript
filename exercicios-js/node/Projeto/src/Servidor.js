const porta = 3003

const express = require('express')
const app = express()       // instanciar express e atribuir para a variavel app

// app.get('/produtos', (req, resp, next) =>{
//     console.log('Middleware 1...')
//     next()  // passar pro proximo
// })

// app.use((req, resp, next) =>{
//     resp.send({ nome: 'Notebook', preco: 123.45})   // será convertido para o formato JSON automaticamente
// })

app.get('/produtos', (req, resp, next) =>{
    resp.send({ nome: 'Notebook', preco: 123.45})   // será convertido para o formato JSON automaticamente
})

app.listen(porta, () =>{        // qual porta que a aplicação vai ficar escutando , e chama uma callback pra mostrar no console que de fato ele conseguiu starta a aplicação
    console.log(`Servidor executando na porta ${porta}.`)
})