import $ from 'jquery'

import { onLoadHtmlSuccess } from '../core/includes'

// duração da animação que vou precisar
const duration = 200

function filterByCity(city) {
    $('[wm-city]').each(function (i, e) {       // for each passando uma função jquery , passando como parâmetro o index e o proprio elemento
        const isTarget = $(this).attr('wm-city') === city       // dizer se o elemento é o alvo da manipulação ou não (mostra o elemento desejado apenas), ou está nulo
            || city === null
        if (isTarget) {
            $(this).parent().removeClass('d-none')        // arrumando as fotos / d-none , esconder e arrumar no bootstrap
            $(this).fadeIn(duration)        // exibe o elemento dando fade in
        } else {
            $(this).fadeOut(duration, () => {       // se não for o elemento ele da um fadeOut
                $(this).parent().addClass('d-none')
            })
        }
    })
}

$.fn.cityButtons = function () {
    const cities = new Set          // lembrando que Set não tem repetição
    $('[wm-city]').each(function (i, e) {
        cities.add($(e).attr('wm-city'))            // pega o valor nome das cidades , para colocar dentro de set cities
    })

    // em cima do set, converte para um array , transformando a cidade em um botão
    const btns = Array.from(cities).map(city => {
        const btn = $('<button>')
            .addClass(['btn', 'btn-info']).html(city)        // vai ter a cor verde (bootstrap)   / conteudo do botão vai ser o nome da cidade
        btn.click(e => filterByCity(city))      // clique do botão vai ser o filtrar por cidade
        return btn
    })
    // outro botão que representa todas as cidades
    const btnAll = $('<button>')
        .addClass(['btn', 'btn-info', 'active']).html('Todas')       // vai vir ativo por padrão    // conteudo do botão vai receber o label todas
    btnAll.click(e => filterByCity(null))         // tem que chamar o filterByCity   // quando passar nulo, ele exibe todas as imagens
    btns.push(btnAll)       //adicionar o btnAll para o array de botões

    //grupo de botões
    const btnGroup = $('<div>').addClass(['btn-group'])
    btnGroup.append(btns)       // adiciona todos os botões que estão dentro desse array (coloca dentro do btn-group)

    $(this).html(btnGroup)
    return this
}

onLoadHtmlSuccess(function () {
    $('[wm-city-buttons]').cityButtons()
})

/*import $ from 'jquery'

$.fn.cityButtons = function () {

    const cities = new Set      // lembrando que Set não tem repetição
    $('[wm-city]').each(function (i, e) {
        cities.add($(e).attr('wm-city'))
    })

    const btns = Array.from(cities).map(city => {
        const btn = $('<button>')
            .addClass(['btn', 'btn-info']).html(city)      // vai ter a cor verde (bootstrap)   / conteudo do botão vai ser o nome da cidade
            .btn.click(e => filterByCity(city))    // clique do botão vai ser o filtrar por cidade
        return btn
    })

    // outro botão que representa todas as cidades
    const btnAll = $('<button>')
        .addClass(['btn', 'btn-info', 'active']).html('Todas')       // vai vir ativo por padrão    // conteudo do botão vai receber o label todas
    btnAll.click(e => filterByCity(null))    // tem que chamar o filterByCity   // quando passar nulo, ele exibe todas as imagens
    btns.push(btnAll)    //adicionar o btnAll para o array de botões

    // grupo de botões
    const btnGroup = $('<div>').addClass(['btn-group'])
    btnGroup.append(btns)   // adiciona todos os botões que estão dentro desse array (coloca dentro do btn-group)

    $(this).html(btnGroup)
    return this
}

onLoadHtmlSuccess(function () {
    $('[wm-city-buttons]').cityButtons()
})
*/