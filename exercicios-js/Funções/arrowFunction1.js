let dobro = function(){
    return 2 * a
}

dobro = (a) => {        // arrow function com bloco (), obrigatoriamente tem que usar o return
    return 2 * a
}

dobro = a => 2 * a      // sem chaves (), tem um retorno (return) implicito na arrow function
console.log(dobro(Math.PI))     

let ola = function (){
    return 'Olá'
}

ola = () => 'Olá'       // refatorado com arrow function // função sem parâmetros
ola = _ => 'Olá'        // pode declarar também com _ (underline), só que é um parâmetro 
console.log(ola())      // em JS você pode ignorar os parâmetros
