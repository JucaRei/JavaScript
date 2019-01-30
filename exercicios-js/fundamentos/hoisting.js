//hoisting é: içar , jogar pra cima

console.log('a =', a)
var a = 2               // jogou pra cima, variavel declarada com var sofre esse efeito, diferentemente de outras linguagem , que lê de cima pra baixo
console.log('a =', a)

//console.log('b =', b)
//let b = 2       // hoisting não ocorre com o let
//console.log('b =', b)


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------

var a = 2;
console.log(a);
function qualquer() {
    
    console.log(a);     // undefined por conta do hoisting , da elevação
    var a = 3;
    console.log(a);
}
qualquer();


function getValor(){
    function retornaValor(){    // declaração sobe
        return 1;
    }
    return retornaValor();
    function retornaValor(){    // declaração sobe
        return 2;
    }
}
var resultado = getValor();
console.log(resultado);


function getValor(){
    var retornaValor = function(){
        return 1;
    }
    return retornaValor();
    var retornaValor = function(){
        return 2;
    }
}
var resultado = getValor()
console.log(resultado)