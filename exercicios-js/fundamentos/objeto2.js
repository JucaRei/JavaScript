console.log(typeof Object)
console.log(typeof new Object)  // função instanciada a partir da palavra reservada new
//console.log(typeof new Object())

const cliente = function(){}
console.log(typeof cliente)
console.log(typeof new cliente)

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto()) // forma de criar objeto em javascript é a partir de função