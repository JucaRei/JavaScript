 // usando a notação literal
const obj1 = {}
console.log(obj1)


//Object em JS
console.log(typeof Object, typeof new Object)  // Objeto foi criado a partir de uma função construtora
const obj2 =  new Object
console.log(obj2)

// Funções construtoras
function Produto(nome, preco, desconto) {
    this.nome = nome    // está publica e não esta encapsulada dentro do objeto
    this.getPrecoComDesconto = () => {          //metodo
        return preco * (1 - desconto)           //encapsulado
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.nome+ ': ' + p1.getPrecoComDesconto(), p2.nome + ': ' + p2.getPrecoComDesconto())

// Função Factory (padrão de projeto)

function criarFuncionario(nome, salarioBase, faltas){
    return {                                            // objeto literal
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)           // quanto ele ganha por dia // quanto ele ganhou tirando as faltas
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.nome + ': ' + f1.getSalario(), f2.nome + ': ' + f2.getSalario())


// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna um Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)  //  converteu esse texto em um objeto com uma variável