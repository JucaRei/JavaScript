const moduloA = require ('../../moduloA') // dois pontos é que nem no terminal , para voltar a uma pasta anterior
console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require('./pasta C/index')
console.log(c.ola2)

// const http = require('http')
// http.createServer((req, res) => {
//     res.write('Bom dia!')
//     res.end()
// }).listen(8080)