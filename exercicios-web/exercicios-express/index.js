const express = require('express')
const app = express ()
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMiddleware')
const usuarioApi = require('./api/usuario')
const produtoApi = require('./api/produto')
produtoApi(app, 'com param!')
//parâmetros e chamar a função
//require('./api/produto')(app, 'com param!')

app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

app.use(bodyParser.text())      // qualquer texto que chegue no corpo da requisição será interpretado
app.use(bodyParser.json())      // JSON 
app.use(bodyParser.urlencoded({extended: true}))    //urlencoded
app.use(saudacao('Juca'))

// express chain of responsability -  next = para ir pro proximo metodo
app.use( (req, res, next) => {
    console.log('Antes...')
 next()
})

app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo = ${req.query.completo}, ano = ${req.query.ano}`)
})

// :id (parâmetro) - algo que pode mudar dentro da URL
app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})


app.post('/corpo', (req, res) => {

    // let corpo = ''
    // req.on('data', function(parte) {
    //     corpo += parte
    // })

    // req.on('end', function(){
    //     res.send(corpo)
    // })
    //res.send(req.body)      // body-parser  - text
    res.send(JSON.stringify(req.body))      // body-parser - JSON
})

// requisição e resposta  (get, post, all)
app.get('/opa', (req, res, next) => {
    console.log('Durante...')
    res.json({
        data: [
            {id: 7, name: 'Ana', position: 1},
            {id: 34, name: 'Bia', position: 2},
            {id: 73, name: 'Carlos', position: 3}
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })
    
    next()

    // res.json([
    //     {id: 7, nam e: 'Ana', position: 1},
    //     {id: 34, name: 'Bia', position: 2},
    //     {id: 73, name: 'Carlos', position: 3}
    // ])
    
    // objeto JS que será convertido para JSON
    // res.json({      
    //     name: 'Ipad 32gb',
    //     price: 1899.00,
    //     discount: 0.12
    // })

    // res.send('<h1>Estou bem!</h1><br><br> <h2>Tipo é HTML!</h2>')
})


//use aplica para qualquer metodo HTTP e para qualquer URL
app.use( (req, res, next) => {
    console.log('Depois...')
 next()
})


app.listen(3000, () => {
    console.log("Backend executando...")
})

// urlencoded é o padrão quando submete um formulario na web