/*
 * Essa é uma calculadora bem legal!!!
 */
const Calculadora = {
    _resultado: 0,
    get resultado() {
        return this._resultado
    },
    somar(a, b = 0) {
        const soma = a + b
        this._resultado += soma
        return this
    },
    potencia(a, b) {
        const potencia = a ** b
        this._resultado += potencia
        return this
    },
    zerar() {
        this._resultado = 0
        return this
    },
    log() {
        console.log(this._resultado)
    }
}

const r = Calculadora.somar(10, 5).potencia(2, 8).zerar().somar(4, 5).resultado
console.log(`O resultado é:${r}`)

Calculadora.zerar().somar(300, 700).somar(1000).log()

/* _resultado -> é um underscore , que é usado como um modificador private, protected , etc.
Uma convenção que os desenvolvedores criaram foi usar o underscore antes da propriedade para representar propriedades privadas. Dessa maneira, os desenvolvedores ao utilizar outras bibliotecas, respeitavam essas "propriedades privadas"!
*/

/**
 *  return this  - consegue encadear uma soma e chama ela denovo
 */