import $ from 'jquery'

// essa função lê todos os atributos, que é wm-include
function loadIncludes(parent) {
    // se o parent vier vazio, seto como padrão o parent procurar no body todo
    if (!parent) parent = 'body'
    $(parent).find('[wm-include]').each(function (i, e) {   //procure todos os elementos que possuem o atributo wm-include, e faz um forEach para cada elemento encontrado
        const url = $(e).attr('wm-include')
        $.ajax({
            url,
            success(data) {     // função callback que vai ser chamada quando a função for bem sucedida
                $(e).html(data)
                $(e).removeAttr('wm-include')   //evito que essa propriedade seja processada um segunda vez

                loadIncludes(e)     // carregar todos , de forma recursiva
            }
        })
    })
}

loadIncludes()