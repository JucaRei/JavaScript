function rand([min = 0, max = 1000]){
    if (min > max) [min, max] = [max, min] // se o minimo for maior que o maximo , inverta // esquerda destructuring , direita criando um novo array
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)  // floor arrendonda pra baixo / ceil pra cima
}

console.log(rand([50, 40]))
console.log(rand([500])) // o minino é 500
console.log(rand([, 10])) // max é 10, ele assume o minimo como 0
console.log(rand([])) // array vazio, ele vai assumir os valores padroes 0 e 1000
// console.log(rand())