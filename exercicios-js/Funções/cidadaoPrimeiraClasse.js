// Função em JS é first-class Object (Citizens)
// Higher-order function (função de alta ordem)
// cidadão de primeira linha é quando a linguagem trata a função como um dado

// criar de forma literal
function fun1(){ } // pode ou não retornar um valor (caso não retorne , ela se torna undefined)


//Armazenar uma função em uma variável
const fun2 = function(){ }      //função anônima

// Armazenar em um array
const array = [function(a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))  // no indice 0

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())  //  passando os parêntesis () ,para ele de fato invocar a função

// Passar uma função como parâmetro para outra função
function run(fun){
    fun()
}

run(function () {console.log('Executando...')})

// Uma função pode retornar/conter uma função
function soma(a, b){
    return function (c){
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)
