const aprovados = ['Agatha', 'Reinaldo', 'Juca', 'Gislaine']

aprovados.forEach(function(nome, indice) {        // recebe 2 parâmetros sempre (indice sempre é passasdo como segundo parametro)
    console.log(`${indice + 1}) ${nome}`)        // +1 para aparecer a partir do 1
})

console.log('---------------------------------------------')
aprovados.forEach(nome => console.log(nome))

console.log('---------------------------------------------')


const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)