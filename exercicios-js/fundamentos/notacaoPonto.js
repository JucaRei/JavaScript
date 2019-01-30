console.log(Math.ceil(6.1)) // ceil arrendonda pra cima

const obj1 = {}
obj1.nome = 'Bola' //mesmo que o atributo não esteja no objeto, ele cria dinâmicamente esse atributo
// obj1['nome'] = 'Bola2'  // mesmo coisa, so que de outra forma
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome // em outras palavas quem instanciar o Obj, o atributo nome vai ficar publico 
    this.exec = function(){
        console.log('Exec...')  //this. você pode criar tanto funções que serão expostas para fora quando ele for instanciada
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()