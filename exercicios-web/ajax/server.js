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

/* UPLOAD usando o xmlhttpRequest
...
*/
const multer = require('multer') // multer - interpretar o formulário que veio do arquivo upload

// configuração comum na hora de fazer um uploud de 1 arquivo // Parte de armazenamento
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload')   // vai salvar o arquivo na pasta atual
    },
    filename: function (req, file, callback) {  // função chamada no momento em que ela vai escolher o nome do arquivo(identificar)
        callback(null, `${Date.now()}_${file.originalname}`)    // qual o nome do arquivo padrão, que usa para formar o nome do arquivo (vai pegar o nome original ,so que antes ele vai colocar a data atual para diferenciar os arquivos, sempre vai ter nomes diferentes , mesmo upando os mesmos arquivos)
    }
})
const upload = multer({ storage }).single('arquivo')

// rota /upload
app.post('/upload', (req, res) => {    // requisição vai ser via Post // função middleware que recebe request response
    upload(req, res, err => {
        if (err) {          // caso dê um erro
            return res.end('Ocorreu um erro.')
        }

        res.end('Upload concluído com sucesso.')
    })
})
app.listen(8080, () => console.log('Executando....'))