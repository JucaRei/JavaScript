const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] //destructuring com espaço ele ignora
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)

// destructuring no ponto de vista de objeto usa as chaves "{ }" e 
// no ponto de vista de array usa conchetes "[ ]"
// cuidado para nao confundir o array com o destructuring
// criando array do lado direito  da operação
// desestruturação do lado esquerdo da operação