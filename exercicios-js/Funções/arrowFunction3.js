let comparaComThis = function (param){
    console.log( this === param)
}

comparaComThis(global) // aponta pro objeto global , esta no node

const obj = {}
comparaComThis = comparaComThis.bind(obj)       // agora ele aponta para objeto e não mais para o global
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)      // não vai se global
comparaComThisArrow(global)

// this dentro de uma função tradicional, ele aponta para o global ; já com arrowFunction ele não aponta para o global e sim para o objeto corrente

comparaComThisArrow(module.exports)  // this

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)        // não consegue mudar com arrow , mesmo usando bind
comparaComThisArrow(module.exports)


//this de uma função arraw é um this associado ao contexto em que a função foi escrita. Não variação mesmo com bind.