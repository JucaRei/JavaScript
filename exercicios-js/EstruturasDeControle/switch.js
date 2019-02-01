const imprimirResultado = function (nota) {  // uma função dentro de uma constante
    switch (Math.floor(nota)) {
        case 10:
            // console.log('Parabéns')
            // console.log('Quadro de honra')
            // console.log('-------------------------------------------------------')
        case 9:
            console.log('Quadro de honra')
            console.log('-------------------------------------------------------')
            break  // tem que colocar break , caso contrario, o switch vai continuar vendo todos os cases
        case 8: case 7:
            console.log('Aprovado')
            console.log('-------------------------------------------------------')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            console.log('-------------------------------------------------------')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            console.log('-------------------------------------------------------')
            break
        default:
            console.log('Nota inválida')
            console.log('-------------------------------------------------------')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)