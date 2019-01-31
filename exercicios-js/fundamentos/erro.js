function trataErroELancar(erro){
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e){
        trataErroELancar(e)
    } finally {
        console.log('final')
    }
}

// try / catch / throw

const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)

//tratamento de erros