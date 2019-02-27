//console.log(global)
global.MinhaApp = Object.freeze ({          // freeze para não poder mudar
    saudacao() {
        return "Estou em todos os lugares!"
    },
    nome: 'Sistema Legal'
})
// console.log(MinhaApp)