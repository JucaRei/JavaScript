const alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Melancia', nota: 9.2}
]

//Imperativo
let total1 = 0    // acumular os valores
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota     //percorre cada 1 dos alunos pegando o indice, a nota esta acrescentando so total1
}   //tem menos reuso

console.log(total1 / alunos.length)

// Declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
//esse metodos podem ser reusados

const total2 = alunos.map(getNota).reduce(soma)         // reduce tem a ideia de reduzir , agregar
console.log(total2 / alunos.length)