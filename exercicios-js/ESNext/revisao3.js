// ES8: Object.values(pega os valores de 1 objeto)/Object.entries(array de outros arrays chave-valor(matriz))
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

//Melhorias na Notação Literal
const nome = 'Carla'
const pessoa = {
    nome,   // Ja cria o atributo com o nome (não precisa mais de nome: nome)
    ola(){   // função não precisa mais colocar a palavra function e atribuir para uma variavel (antigamente -    ola: function() )
        return 'Oi gente !'
    }
}

console.log(pessoa.nome, pessoa.ola())

//Class
class Animal{}  
class Cachorro extends Animal {  //herança
    falar(){
        return 'Au au'
    }
}

console.log(new Cachorro().falar())  // new cria objetos a partir de uma classe