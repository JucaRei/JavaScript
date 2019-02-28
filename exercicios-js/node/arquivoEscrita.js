const fs = require('fs')  // file system

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

//writeFile persiste e manda salvar no disco
// JSON.Strinfy pega o objeto e transforma em JSON
fs.writeFile(__dirname + '/.arquivoGerado.json', JSON.stringify(produto), err => {
   console.log(err || 'Arquivo salvo!'  ) 
})