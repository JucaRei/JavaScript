//let e const
//let tem escopo de bloco, além de ter herdado de var - escopo de função e global
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)
// console.log(b)

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)
console.log(`${produto} 
é 
caro!`)



// Destructuring - tirar de dentro de uma estrutura algo (seja objeto, array, string,etc)
//String
const [l, e, ...tras] = "Cod3r"     // ... operador rest
console.log(l, e, tras)

//array
const [x, , y] = [1, 2, 3]
console.log(x, y)

//objeto
const { idade: i, nome } = { nome: 'Ana', idade: 9 }  //renomear idade
console.log(i, nome)