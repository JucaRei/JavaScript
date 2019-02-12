const pai = { nome: 'João', corCabelo: 'ruivo'}

const filha1 = Object.create(pai)   // já foi criado o objeto ,tendo como prototype o objeto pai
filha1.nome = 'Larissa'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2){
    console.log(key)
    filha2.hasOwnProperty(key) ?            // pra saber se determinado atributo ele pertence ao proprio objeto ou veio por herança
        console.log(key) : console.log(`Por herança: ${key}`)
}