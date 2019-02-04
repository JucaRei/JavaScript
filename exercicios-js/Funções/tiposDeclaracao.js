console.log(soma(3, 4))
// console.log(sub(3, 4)) so funciona, se colocado apos a função expression

// function declaration
function soma (x, y){
    return x + y
}

//function expression

const sub = function(x, y){
    return x - y
}

// named function expression (nomeada)
const mult = function mult(x, y){
    return x * y
}
console.log(mult(3, 4))