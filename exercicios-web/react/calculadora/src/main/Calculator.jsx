import React, { Component } from 'react'
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'

//Logica operações

const initialState = {
    displayValue: '0',
    clearDisplay: false, // inicialmente é falso
    operation: null,    // armezena a operação
    values: [0, 0],     // array 2 valores , para quando eu digitar o numero e a operação ele limpar o display, mais armazenar o valor para realizar a operação
    current: 0  // indica qual valor que eu estou manipulando, ja que eu tenho um array de valores
}
export default class Calculator extends Component {

    state = { ...initialState }

    constructor(props) {
        super(props)

        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    // resetar calculadora
    clearMemory() {
        // console.log('limpar')
        this.setState({ ...initialState })
    }

    // setar o tipo de operação(divisão, multiplicação, etc)
    setOperation(operation) {
        // console.log(operation)
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true })
        } else {
            const equals = operation === '='
            const currentOperation = this.state.operation

            const values = [...this.state.values]
            try {
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)  // operações
            } catch (e) {
                values[0] = this.state.values[0]
            }
            values[1] = 0

            this.setState({
                displayValue: values[0],    // resultado da operação vai ser armazenado no display para ser exibido
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
    }

    // adicionar digito
    addDigit(n) {
        // regra pra evitar que tenha 2 pontos na calculadora
        if (n === '.' && this.state.displayValue.includes('.')) {
            return
        }   // so limpa quando o valor estiver com 0 ou quando a variavel clear display estiver true
        const clearDisplay = this.state.displayValue === '0'
            || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({ displayValue, clearDisplay: false })

        if (n !== '.') {
            const i = this.state.current
            const newValue = parseFloat(displayValue)   // pega o valor atual + o recebido e tranformo para float
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({ values })     // substitui o atributo values no array
            console.log(values)
        }
    }
    render() {
        const addDigit = n => this.addDigit(n)
        const setOperation = op => this.setOperation(op)
        return (
            // no jsx Usa className ao invês de class
            <div className="calculator">
                <Display value={this.state.displayValue} /> {/* referencia o estado */}
                <Button label="AC" click={this.clearMemory} triple />
                <Button label="/" click={this.setOperation} operation />
                <Button label="7" click={this.addDigit} />
                <Button label="8" click={this.addDigit} />
                <Button label="9" click={this.addDigit} />
                <Button label="*" click={this.setOperation} operation />
                <Button label="4" click={this.addDigit} />
                <Button label="5" click={this.addDigit} />
                <Button label="6" click={this.addDigit} />
                <Button label="-" click={this.setOperation} operation />
                <Button label="1" click={this.addDigit} />
                <Button label="2" click={this.addDigit} />
                <Button label="3" click={this.addDigit} />
                <Button label="+" click={this.setOperation} operation />
                <Button label="0" click={this.addDigit} double />
                <Button label="." click={this.addDigit} />
                <Button label="=" click={this.setOperation} operation />
            </div>
        )
    }
}