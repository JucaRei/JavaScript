import $ from 'jquery'

//Array, funções callbacks, que serão chamadas quando uma função for bem sucedida
const loadHtmlSuccessCallbacks = []

export function onLoadHtmlSuccess(callback) {   // funções registradas
    if (!loadHtmlSuccessCallbacks.includes(callback))   // se a callback , não está incluidade nesse array
        loadHtmlSuccessCallbacks.push(callback) //coloque
}

// essa função lê todos os atributos, que é wm-include
function loadIncludes(parent) {
    // se o parent vier vazio, seto como padrão o parent procurar no body todo
    if (!parent) parent = 'body'
    $(parent).find('[wm-include]').each(function (i, e) {   //procure todos os elementos que possuem o atributo wm-include, e faz um forEach para cada elemento encontrado
        const url = $(e).attr('wm-include')
        $.ajax({    // requisição ajax
            url,
            success(data) {     // função callback que vai ser chamada quando a função for bem sucedida
                $(e).html(data)
                $(e).removeAttr('wm-include')   //evito que essa propriedade seja processada um segunda vez

                loadHtmlSuccessCallbacks.forEach(callback => callback(data))
                loadIncludes(e)     // carregar todos , de forma recursiva
            }
        })
    })
}

loadIncludes()