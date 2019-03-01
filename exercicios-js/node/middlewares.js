// middleware pattern (chain of responsability)
const passo1 = (ctx, next) =>{          // 2 parametros , ctx é contexto
    ctx.valor1 = 'mid1'                 // lembre-se objeto em javascript é uma coleção de chaves e valores dinâmicas 
    next()                              //chama a função next
}

const passo2 = (cxt, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 ='mid3'

const exec =(ctx, ...middlewares) => {   //conjunto de funções middlewares //... é o operador rest - a ideia é passar varias funções e ele junta isso tudo num array
    const execPasso = indice =>{         // para executar cada um dos passos, passa como atributo o indice que eu quero executar(por ex: execute a função de indice 0, ele vai olhar no array ...middleware, e vai pegar a função de indice 0 e executar ela)
        middlewares && indice < middlewares.length  && // verifica se o array esta setado (se for true); e o indice que foi passado é menor que o tamanho do array
            middlewares[indice](ctx, () => execPasso(indice + 1))           // executa middlewares (é uma função) passando o indice, vai retorna a função // e chama essa função (ctx) e passar a função next(vai ser uma arrow function) e chamo execPasso, passando o indice + 1 (ou seja a função vai simplesmente chamar a propria função(recursividade))
    }
    execPasso(0)    // pra finalizer, dispara a execução no passo 0
}

const ctx = {}   // para testar criei um contexto com um objeto vazio 
exec(ctx, passo2, passo1, passo3)      //e chamo a função exec , passando o contexto(ctx) e os passos  // ele pega os 3 operadores , passa pro array e faz as verificações de forma recursiva
console.log(ctx)

// pode mudar a ordem de execução dos passos, pode suprimir um passo