// tagged template , para criar uma mascara R$
function real(partes, ...valores) {
    const resultado = []    // colocar os elementos dentro de um array , depois faz um join
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`  // se não for um numero , retorne o proprio valor // se for um valor numerico ele vai aplicar a mascara valor real R$
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

const preco = 29.9
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`)