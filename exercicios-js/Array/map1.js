// map serve para fazer uma tranformação no array, a ideia é mapear o array , para outro array 
// do mesmo tamanho, so que com os dados tranformados
const nums = [1, 2, 3, 4, 5]

//for com proposito
let resultado = nums.map(function(e){
    return e * 2                //retornar o dobro
})

console.log(resultado, nums)        // nums nao foi modificado; map gera um novo array

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`      // to fixed 2 , para ter 2 casas decimais // replace substitui o ponto por virgula, para ficar como usa no BR

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)      // tranformar sucessivamente
console.log(resultado)