const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()   // invocando a função retorna, retorna um objeto
const contadorD = require('./instanciaNova')()  //invocar a função factory

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor ,contadorB.valor)  // como usei 2 incrementos o valor é 3 

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor) // aqui é diferente , porque são novas intancias a partir de uma factory

//node faz cache