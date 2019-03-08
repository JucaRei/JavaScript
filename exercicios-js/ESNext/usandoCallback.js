// sem promise...
//axios é baseado em promises
const http = require('http')  // http modulo do proprio node interno

const getTurma = (letra, callback) => {    // letra porque o caminho é o mesmo, so muda letra : A, B e C
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {   // em cima da resposta ,(res) eu recebo os dados
        let resultado = ''

        res.on('data', dados => {   //receptar o evento de reposta
            resultado += dados    // cada um dos dados que for chegando eu concateno na variavel resultado
        })

        res.on('end', () => {     // quando terminar de perga os dados('end'), pega o dado JSON e converte 
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = []
getTurma('A', alunos => {
    // console.log(alunos)
    // console.log('----------------------------------------------------------------------------------------')
    // console.log(alunos[0].nome)
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))   // saber de onde esta vindo aquele nome
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
 })