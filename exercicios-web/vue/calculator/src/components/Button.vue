<template>
  <!-- $emit - dispara 1 evento -->
  <button
    class="button"
    @click="$emit('onClick', label)"
    :class="{ double, triple, operation}"
  >{{ label }}</button>
</template>

<script>
export default {
  props: {
    label: {},
    operation: { type: Boolean }, // caso seja verdadeiro ele aplica as classes - double, triple ...etc
    double: { type: Boolean },
    triple: { type: Boolean }
  }
};
</script>

<style>
:root {
  /* pra definir uma variável tem que começar com -- */
  --bg-button: #f0f0f0;
  --border-button: solid 1px #888;
}

.button {
  font-size: 1.4em;
  background-color: var(--bg-button);
  border: none;
  border-right: var(--border-button);
  border-bottom: var(--border-button);
  outline: none; /* outline - quando clica fica o azul */
}

.button:active {
  background-color: #ccc;
}

.button.double {
  grid-column: span 2;
}

.button.triple {
  grid-column: span 3;
}

.button.operation {
  background-color: #fa8231;
  color: #fff;
}

.button.button.operation:active {
  background-color: #fa8231cc;
}
</style>