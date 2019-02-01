function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min // intervalo mais o valor minimo/ se for 0 da o min , se for 1 da o maximo
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) { // quando o valor for -1 , ele sai do laço
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')