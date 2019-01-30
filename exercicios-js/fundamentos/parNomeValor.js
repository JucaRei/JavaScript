// par nome/valor
const saudacao = 'Opa' //contexto léxico 1 (local no qual a sua variável foi fisicamente no código)

function exec(){
    const saudacao = 'Falaaa' // contexto léxico 2  
    // esse saudação vai procurar num contexto restrito , que é a da função , então não há conflito
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 100,
    endereco: {
        logradouro: 'Rua da Zona',
        numero: 69
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)