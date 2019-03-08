//  transformar um codigo assincrono em algo que parace sincrono


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

// codigo vai parecer mais sincrono
//Recuso do ES8
//Objetivo simplificar o uso de promises... 
// a palavra await , so vai funcionar dentro de uma função que tiver marcado async
let obterAlunos = async () => {
    const turmaA = await getTurma('A')   // atribui o resultado da turma a const turmaA; ou seja trabalhei de uma forma muito mais sincrona
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')
    return [].concat(turmaA, turmaB, turmaC)
}   //retorna um objeto AsyncFunction

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))   //mapei uma lista de objetos do tipo aluno, para apenas uma lista de nome
    .then(nomes => console.log(nomes))
