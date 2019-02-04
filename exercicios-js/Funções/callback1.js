const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`) // + 1 por que , o indice sempre começa em 0
}

// callback a idéia é de passar uma função para uma outra função e quando determinado evento acontecer, esse função que você passou será chamada de volta
// callback pode ser chamada várias ou poucas vezes dependendo contexto 

fabricantes.forEach(imprimir)  // para cada elemento que ele achar no array , ele vai chamar devolta
console.log("---------------------------------------------------------------------")
fabricantes.forEach(function(fabricante){    // so tem 1 parâmetro , então ele vai pergar o 1 parâmetro ; no caso nome
    console.log(fabricante)
})
console.log("---------------------------------------------------------------------")
fabricantes.forEach(fabricante => console.log(fabricante))

