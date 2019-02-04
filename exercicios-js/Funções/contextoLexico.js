const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()       // a função guarda consigo o local onde ela foi definida
}

exec()