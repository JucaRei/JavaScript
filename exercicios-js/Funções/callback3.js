// Exemplo de callback no browser
document.getElementsByTagName('body')[0].onclick = function (e) {   // função que acessa os elementos a partir de uma tag // atribui onclick , sempre que usuário clicar no body
    console.log('O evento ocorreu!')
}