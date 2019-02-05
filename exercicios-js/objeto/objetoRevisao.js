// coleção dinâmica de pares chave/valor
const produto = new Object      // formar de criar um objeto a partir do operador new       // Object é uma função
produto.nome = 'Cadeira'        // coleção dinâmica
produto['marca do produto'] = 'Generica'        // pode fazer com cochetes
produto.preco = 220

console.log(produto)
console.log('---------------------------------------------------------')
delete produto.preco
delete produto['marca do produto']
console.log(produto)
console.log('---------------------------------------------------------')

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {         // dentro do objeto , pode ter outro objeto, que tem seus próprios atributos
        nome: 'Raul',
        idade: 56,
        endereco: {         // próprios atributos
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{            // Array de objetos
        nome: 'Junior',
        idade: 19
    }, {                      // Segundo objeto , dentro desse array
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function() {       // Pode ter funções também, dentro desse objeto carro 
        // ...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'      // acessar em formar de string, em caso você não conheça os atributos
console.log(carro)
console.log('---------------------------------------------------------')

// delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log('---------------------------------------------------------')
console.log(carro.condutores)
console.log('---------------------------------------------------------')
console.log(carro.condutores.length)