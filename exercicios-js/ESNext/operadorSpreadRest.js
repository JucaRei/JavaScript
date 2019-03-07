// operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmetro de função

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario } // pega todos os atributos de funcionário , espalha dentro do objeto clone(vai ter os atributos de funcionário)
console.log(clone)

// usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']   // espalhando dentro de um array , todos os elementos de outro array
console.log(grupoFinal)
