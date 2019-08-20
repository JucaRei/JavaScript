<template>
  <div class="calculator">
    <Display :value="displayValue" />
    <!-- vai ocupar 3 espaços -->
    <Button label="AC" triple @onClick="clearMemory" />
    <Button label="/" operation @onClick="setOperation" />
    <Button label="7" @onClick="addDigit" />
    <Button label="8" @onClick="addDigit" />
    <Button label="9" @onClick="addDigit" />
    <Button label="*" operation @onClick="setOperation" />
    <Button label="4" @onClick="addDigit" />
    <Button label="5" @onClick="addDigit" />
    <Button label="6" @onClick="addDigit" />
    <Button label="-" operation @onClick="setOperation" />
    <Button label="1" @onClick="addDigit" />
    <Button label="2" @onClick="addDigit" />
    <Button label="3" @onClick="addDigit" />
    <Button label="+" operation @onClick="setOperation" />
    <Button label="0" double @onClick="addDigit" />
    <Button label="." @onClick="addDigit" />
    <Button label="=" operation @onClick="setOperation" />
  </div>
</template>

<script>
import Display from "../components/Display";
import Button from "../components/Button";

export default {
  data: function() {
    return {
      displayValue: "0",
      clearDisplay: false,
      operation: null,
      values: [0, 0],
      current: 0
    };
  },
  // preciso referenciar os 2 componentes que importei
  components: { Button, Display },
  methods: {
    clearMemory() {
      Object.assign(this.$data, this.$options.data()); // o objeto volta pro estado inicial (limpa)
    },
    setOperation(operation) {
      if (this.current === 0) {
        // primeiro numero que o usuario esta informando
        this.operation = operation;
        this.current = 1; // passar a digitar no segundo valor
        this.clearDisplay = true; // quando digitar o segundo numero para fazer uma operação, ele limpa a tela
      } else {
        const equals = operation === "=";
        const currentOperation = this.operation;

        try {
          this.values[0] = eval(
            `${this.values[0]} ${currentOperation} ${this.values[1]}`
          );
        } catch (e) {
          this.$emit("onError", e);
        }

        this.values[1] = 0;

        this.displayValue = this.values[0]; // resultado da operação será colocado no Display
        this.operation = equals ? null : operation;
        this.current = equals ? 0 : 1;
        this.clearDisplay = !equals;
      }
    },
    addDigit(n) {
      if (n === "." && this.displayValue.includes(".")) {
        // se ja tiver o '.', ele simplesmente retorna e sai dessa função
        return;
      }

      const clearDisplay = this.displayValue === "0" || this.clearDisplay;
      const currentValue = clearDisplay ? "" : this.displayValue;
      const displayValue = currentValue + n;

      this.displayValue = displayValue;
      this.clearDisplay = false;

      //Alternativa 1
      this.values[this.current] = displayValue;

      //Alternativa 2
      // if (n !== ".") {
      //   const i = this.current;
      //   const newValue = parseFloat(displayValue);
      //   this.values[i] = newValue;
      // }
    }
  }
};
// $ é um padrão da própria linguagem. o "this.$data" vai pegar o estado corrente/atual, e o "this.$options.data()) " vai fazer a aplicação executar "data" novamente, quando data é executada ela retorna o estado inicial, isto é, a calculadora zerada.
</script>



<style>
.calculator {
  height: 320px;
  width: 235px;
  border-radius: 5px;
  overflow: hidden;

  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}
</style>