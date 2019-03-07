//Promise é uma 'promessa'/ usa-se Promise quando você quer um processamento assincrono
// Representa uma operação assincrona (pode ser atendido ou rejeitado)

function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => { //parametro resolve é uma função que vai ser chamada quando a promessa for atendida // reject (rejeitar o atendimento dessa promessa)
        setTimeout(() => {
            resolve(frase, 'abc') //chama o resolve depois do tempo indicado // promise aceita apenas 1 parâmetro
        }, segundos * 1000) // multiplica por que o setTimeout é em milisegundos
    })
}

falarDepoisDe(3, 'Que legal!')     // depois de 3 segundos
    .then((frase, abc) => frase.concat('?!?')) //concat concatena // se a promessa foi atendida de forma correta , ele chama a função then 
    .then(outroFrase => console.log(outroFrase)) // then pode encadear varias
    .catch(e => console.log(e)) // tratar erro



function falarDepoisDe1(segundos, frase) {
    return new Promise((resolve, reject) => { //parametro resolve é uma função que vai ser chamada quando a promessa for atendida // reject (rejeitar o atendimento dessa promessa)
        setTimeout(() => {
            reject(frase, 'abc') //chama o resolve depois do tempo indicado // promise aceita apenas 1 parâmetro
        }, segundos * 1000) // multiplica por que o setTimeout é em milisegundos
    })
}

falarDepoisDe1(3, 'Que legal!')
    .then((frase, abc) => frase.concat('?!?')) // se a promessa foi atendida de forma correta , ele chama a função then 
    .then(outroFrase => console.log(outroFrase)) // then pode encadear varias
    .catch(e => console.log(e)) // .catch (tratar erro)