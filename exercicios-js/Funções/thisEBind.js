const pessoa = {
    saudacao: 'Bom dia!',
    falar(){    // ES2015 pode  criar funções desse jeito também
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()     // conflito entre paradigmas: funcional e Orientada a Objetos

const falarDePessoa = pessoa.falar.bind(pessoa)  // this sempre será resolvido para pessoa
falarDePessoa()