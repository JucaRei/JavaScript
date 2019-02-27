console.log(this === global)
console.log(this === module)
console.log(this === module.exports)  // fora de uma função o this aponta para module.exports // exports
console.log(this === exports)    

function logThis(){
    console.log('Dentro de uma função...')
    console.log(this === exports)     // dentro de uma função o this não aponta para exports
    console.log(this === module.exports)
    console.log(this === global)    // this dentro de uma função ele aponta para global
}  

logThis()