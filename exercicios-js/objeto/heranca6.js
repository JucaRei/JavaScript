function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

// simulando o new
function novo(f, ...params) {   // ... é o operador spread rest
    const obj = {}              // cria um objeto novo
    obj.__proto__ = f.prototype     // aponta pra a funcao prototype // associei o prototypo desse objeto ao atributo prototype da funcao
    f.apply(obj, params)        // executa a funcao f
    return obj
}

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)