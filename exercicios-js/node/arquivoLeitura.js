const fs = require('fs') // vem instalado no node, ele vai procuras os modulos nativos, se não encontrar ele vai procurar na pasta node_modules

const caminho = __dirname + '/arquivo.json'   // __dirname  é diretorio atual // __dirname é uma constante que esta presente em todos os arquivos/modulos do node , que representa o diretorio atual

// sincrono...   // não recomendado para arquivos grandes , pode parar no event loop
const conteudo = fs.readFileSync(caminho, 'utf-8')     // readFileSync leia um arquivo de for Sincrona  // utf-8 é o tipo de enconding, que eu quero que ele leia
console.log(conteudo)

console.log('------------------------------------------------------------')

//assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {   // passa uma callback com o erro e  o conteudo
    const config = JSON.parse(conteudo)             // tem que tranformar em um objeto
    console.log(`${config.db.host}:${config.db.port}`)
})

console.log('------------------------------------------------------------')

// jeito mais simplificado e fácil 
const config = require('./arquivo.json')        // ja retorna um objeto instanciado
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {   // retorna um array com todos os arquivos do diretorio
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})