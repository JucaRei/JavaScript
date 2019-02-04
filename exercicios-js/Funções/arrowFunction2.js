function Pessoa (){
    this.idade = 0

    setInterval(() =>{      //arrow function literal dentro do setInterval
        this.idade++        // this não varia
        console.log(this.idade)
    }, 1000)
}

new Pessoa