// Implementar o proprio foreach
Array.prototype.forEach2 = function(callback){
    for (let i = 0; i < this.length ; i++){
        callback(this[i], i, this)          // valor atual , indice ; e o valor completo
    }
}

const aprovados = ['Agatha', 'Reinaldo', 'Juca', 'Gislaine']

aprovados.forEach2(function(nome, indice, array) {        
    console.log(`${indice + 1}) ${nome}`) 
    console.log(array)     
})