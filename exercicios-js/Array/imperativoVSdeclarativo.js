const alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Melancia', nota: 9.2}
]

//Imperativo
let total1 = 0    // acumular os valores
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota     //percorre cada 1 dos alunos pegando o indice, a nota esta acrescentando so total1
}

console.log(total1 / alunos.length)
