const express = require('express')
const app = express()       // instanciar o express e associar a essa variavel app
const bodyParser = require('body-parser') // faz o parser das request body

app.use(bodyParser.urlencoded({extended: true}))   // urlencoded é o padrão que quando você submete 1 formulário, é o padrão que vem

app.post('/usuarios',(req, resp) => {   // atender as urls / requisição do tipo post / função middleware(requisicao , resposta e next)
    console.log(req.body)
    console.log(req.query)
    resp.send('<h1>Parabéns. Usuário Incluido!</h1>')
})

app.post('/usuarios/:id', (req, resp) =>{  // para o id usa o parametro :id
    console.log(req.params.id)  // mostra o id
    console.log(req.body)   // mostra o que veio no body
    resp.send('<h1>Parabéns, Usuário Alterado</h1>')
})

app.listen(3003)  // a porta que vai estar o servidor



//npm i --save-dev nodemon