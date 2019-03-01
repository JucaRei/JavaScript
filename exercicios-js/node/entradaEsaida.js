const anonimo = process.argv.indexOf('-a') !== -1
console.log(anonimo)

if(anonimo){
    process.stdout.write('Fala Anonimo!\n')     // \n  eh quebra de linha
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data =>{    // stdin seria o teclado( Input de dados , tipo o System.in do Java) // evento on data , eh quando voce digita alguma coisa e do enter // atribui a variavel data
        const nome = data.toString().replace('\n', '') // substituiu a quebra de linha por espaco
        
        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}