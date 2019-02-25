// reduce serve para transformar um array em um unico elemento
const alunos = [
  { nome: "João", nota: 7.3, bolsista: false },
  { nome: "Maria", nota: 9.2, bolsista: true },
  { nome: "Pedro", nota: 9.8, bolsista: false },
  { nome: "Ana", nota: 8.7, bolsista: true }
]
console.log(alunos.map(a => a.nota))
// extrair dos alunos apenas a nota // array , passando o map , que vai ter o reduce que recebe o acumulador e o valor atual (você tambem pode passar o indice e o array)
const resultado = alunos
  .map(a => a.nota)
  .reduce(function(acumulador, atual) {
    console.log(acumulador, atual);
    return acumulador + atual;
  }, 0); // valor inicial

console.log(resultado)

console.log("-------------------------------------------------------------------------")
//O reduce funciona +- igual à um somatório. Ele itera pelos itens de um array, e realiza operações nos itens e retorna um resultado final.

const numeros = [1, 2, 3, 4, 5]

const somatorio = numeros.reduce((acumulador, atual) => {
  return acumulador + atual;
})

console.log(somatorio)

const palavras = ["Hello", "World", "from", "reduce!"]

const frase = palavras.reduce((fraseCompleta, palavra) => {
  return fraseCompleta + " " + palavra;
})

console.log(frase)

console.log("-------------------------------------------------------------------------")

const Numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let numeroACalcular = 5

const r = Numeros.reduce(function(anterior, proximo) {
  console.log(`A Multiplicação de ${anterior} e ${proximo} é ${anterior * proximo},`)
  return anterior * proximo}, numeroACalcular)

console.log(`O resultado final é ${r}`);
