const sequencia = {
    _valor: 1,          // convenção JS (acessada internamente)
    get valor() { return this._valor++},
    set valor(valor) { 
        if (valor > this._valor) {      // so entra se o valor for maior que _valor
            this._valor = valor
        } 
    }
}