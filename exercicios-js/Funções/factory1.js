//const prod1 = {         // instância de um objeto
//    nome: '...' ,
//    preco: '45'
//}

//const prod2 = {
//    nome: '...' ,
//    preco: '45'
//}

//Factory Simples           // Função que retorna um objeto  // Fabricar objetos a partir da chamada da função
function criarPessoa(){
    return {    //parâmetros fixos
        nome: 'Ana' ,
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())