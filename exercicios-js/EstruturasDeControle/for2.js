const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
// for in da o índice , ele percorre pelos indices e não o valor

for (let i in notas){
    console.log(i + '-', notas[i])
}

const pessoa = {
    nome: 'Juca',
    sobrenome: 'Ponce Brosler',
    idade: 23,
    peso: 85
}

for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

