/*function Pessoa() {
    this.idade = 0
   
    setInterval(function(){
        self.idade++
        console.log(this.idade)
    }.bind(this) , 1000)  //1000 milisegundos / 1 segundo    //dispara outra função a partir de um intervalo // função anônima
}

new Pessoa      // instanciar   */


function Pessoa() {
    this.idade = 0
   
    const self = this       // armazena o this em uma constante self
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/ , 1000)  //1000 milisegundos / 1 segundo    //dispara outra função a partir de um intervalo // função anônima
}

new Pessoa      // instanciar