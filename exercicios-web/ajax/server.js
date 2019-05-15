const bodyParser = require('body-parser')
const express = require('express')

// instanciar o servidor express
const app = express()

// middleware é uma função que vai ser executada , quando uma determinada requisição chegar
app.use(express.static('.')) // middleware - dentro da pasta atual no qual o arquivo server.js está sirva os arquivos estáticos
app.use(bodyParser.urlencoded({
    extended: true
})) // se vier nesse formato , a partir de um submit de um formulário, esse codigo lê os dados e transforma isso em um objeto
app.use(bodyParser.json()) // se vier um json , esse codigo vai ser aplicado, para transformar um json em um objeto

// app.get('/teste', (req, res) => res.send(new Date)) // função middleware , que vai ser invocada , quando esse /teste for invocado a partir de uma requisição get

app.listen(8080, () => console.log('Executando....'))