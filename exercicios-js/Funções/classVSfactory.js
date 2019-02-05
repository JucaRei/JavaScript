// this pode variar
class Pessoa{
    constructor(nome){                  //construtor de uma classe
        this.nome = nome                // this passou a ser publica
    }

    falar(){
        console.log(`Meu nome é : ${this.nome} `)
    }
}

const p1 = new Pessoa("Juca")
p1.falar()

// this não varia com Função factory    // não precisa acessar a variável nome usando this
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é : ${nome}`)
    }
}
const p2 = criarPessoa('João')
p2.falar()