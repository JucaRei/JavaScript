function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2   // ou se usa pipe
    const comprarTv50 = trabalho1 && trabalho2 // e se usa &&
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor // ou exclusivo
    const comprarTv32 = trabalho1 != trabalho2  // ou exclusivo
    const manterSaudavel = !comprarSorvete      //operador unário   //negação lógica

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}  // cria o objeto sem precisar chave: valor // recurso novo do ECM2015
}
console.log(compras(true, true))
console.log('------------------------------------------------------')
console.log(compras(true, false))
console.log('------------------------------------------------------')
console.log(compras(false, true))
console.log('------------------------------------------------------')
console.log(compras(false, false))