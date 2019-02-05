// IIFE -> Imemediately Invoked Function Expression   // Função auto invocada

(function() {       // entre parentesis (), função anônima
    console.log(`Será executado na hora!`)
    console.log(`Foge do escopo mais abrangente!`)
})()    // () pode invocar diretamente na hora de definir


// Muito usado para fugir do escopo global