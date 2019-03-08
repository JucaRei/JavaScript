// com promise...
const http = require('http')  // http modulo do proprio node interno

const getTurma = letra => {    
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {   
            let resultado = ''
    
            res.on('data', dados => {   
                resultado += dados    
            })
    
            res.on('end', () => {     
                try{
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}

// let nomes = []
// getTurma('A').then (alunos => {
//     // console.log(alunos)
//     // console.log('----------------------------------------------------------------------------------------')
//     // console.log(alunos[0].nome)
//     nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))   // saber de onde esta vindo aquele nome
//     getTurma('B').then (alunos => {
//         nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
//         getTurma('C').then (alunos => {
//             nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
//             console.log(nomes)
//         })
//     })
//  })

 
 Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))   // todos os elementos em 1 unico array
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message))  // sempre coloque o catch para tratar qualquer eventual problema

getTurma('D').catch(e => console.log(e.message))