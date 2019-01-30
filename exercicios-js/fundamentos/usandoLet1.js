var numero = 1
{
    let numero = 2
    console.log('dentro =', numero) // no let tem o escopo de bloco, diferentemente de var
}
console.log('fora =', numero)

// var tem escopo global e de função
// let tem escopo global , escopo de função e escopo de bloco