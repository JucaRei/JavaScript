const prod1 = {} // par de chaves representa o objeto de forma literal
prod1.nome = 'Celular Galaxy Note 12' // objeto é sempre uma coleção de chave e valor / objeto pode ter outro objetos dentro dele como por ex: produto , categoria
// objeto é uma coleção ou um grupo de pares chave/valor

prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}
prod2['Desconto Legal'] = 0.40

console.log(prod2)

// não é json

// ex: json

// '{ "nome": "Camisa Polo", "preco": 79.90 }'   isso é um json

// json é um formato textual, para 'interoperabilidade' entre sistemas, ou seja, trocar dados entre sistemas
