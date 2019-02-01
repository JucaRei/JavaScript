function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min // intervalo mais o valor minimo/ se for 0 da o min , se for 1 da o maximo
    return Math.floor(valor)
}

let opcao = -1

do {    // pelo menos 1 repetição é garantida, porque ele executa o bloco e so depois ele faz a verificação se deve continuar ou não.
    opcao = getInteiroAleatorioEntre(-1, 100)
    console.log(`Opção escolhida foi ${opcao}.`)    // crase template string
}   while (opcao != -1) // expressão depois do bloco

console.log('Até a próxima!')