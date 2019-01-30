{
    {
        {
            {
                var sera = 'Será???' // a variável var dentro de um bloco de código que não seja uma função, ela ficara visivel para todo mundo mesmo que esteja fora do bloco
                console.log(sera)
            }
        }
    }
}
console.log(sera)

function teste() {      // quando defini uma variável dentro da função, ele estara dentro do escopo da função apenas
    var local =  123
    console.log(local)
}

teste()
console.log(local)

// var ou é global(visivel para todo mundo), ou var no escopo de função