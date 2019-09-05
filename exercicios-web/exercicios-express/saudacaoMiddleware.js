function saudacao(nome) {   // função retorna uma função middleware
    return function(req, res, next){
        console.log(`Seja bem vindo ${nome}.`)
        next()
    }
}
//exportei
module.exports = saudacao
