function rand({ min = 0, max = 1000}) {     //destructuring , ja tira de dentro do objeto o atributo min e max ; e entregue esses atributos prontos
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj = { max: 50, min: 40}
console.log(rand(obj))
console.log(rand({ min: 900 }))
console.log(rand({}))
//console.log(rand())

//console.log(rand({ max: 50, min: 40}))

// Math.random() * (max-min) + min  faz é criar um número que fique dentro do intervalo de números informado.
/**
 * O random() é um método do Math que cria um número aleatório 
 * entre 0 e 1 (0.1, 0.002, 0.004, etc...), em seguida este 
 * número gerado é multiplicado pela diferença do max - min e 
 * depois é somado o valor do mínimo para que ele fique dentro do intervalo de números informado.
 */

 //Para usar as funções matemáticas existentes na linguagem Javascript, é necessário usar o objeto Math.

 //O método Math.floor() arredonda um número para baixo para o número inteiro mais próximo, e retorna o resultado.

//Exemplo: O valor 2.64 arrendondando (floor) = 2