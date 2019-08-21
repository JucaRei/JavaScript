<template>
  <div id="app">
    <h1>Problema de Monty Hall</h1>

    <div class="form">
      <div v-if="!started">
        <!-- So vai aparecer se nao estiver startado -->
        <label for="portsAmount">Quantas portas?</label>
        <input type="text" id="portsAmount" size="3" v-model.number="portsAmount" />
        <!-- NOTE v-model.number valor numerico -->
      </div>

      <div v-if="!started">
        <label for="selectedPort">Qual porta é premiada?</label>
        <input type="text" id="selectedPort" size="3" v-model.number="selectedPort" />
      </div>

      <button v-if="!started" @click="started = true">Iniciar</button>
      <button v-if="started" @click="started = false">Reiniciar</button>
    </div>

    <div class="doors" v-if="started">
      <!-- as portas vão aparecer apenas se o jogo estiver iniciado -->
      <div v-for="i in portsAmount" :key="i">
        <Door :hasGift="i == selectedPort" :number="i" />
      </div>
    </div>

    <!-- <Door number="1" :hasGift="false" /> -->
    <!-- : passa como Boolean , sem o : fica como string -->
  </div>
</template>
    
<script>
import Door from "./components/Door";

export default {
  name: "App", //nome do Componente
  components: { Door },
  data: function() {
    return {
      started: false, // quando o jogo não estiver inicializado aparece o formulário
      portsAmount: 3, // quantas portas inicia o jogo
      selected: null // portas selecionadas inicialmente null
    };
  }
};
</script>

<style>
* {
  font-family: "Montserrat", sans-serif;
  box-sizing: border-box;
}

body {
  color: rgb(166, 255, 0);
  background: linear-gradient(to right, #03001e, #7303c0, #ec38bc, #72e9d9);
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#app h1 {
  border: 2px solid #000;
  background-color: rgba(20, 19, 19, 0.267);
  padding: 19px;
  margin-bottom: 60px;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}

.form,
.form input,
.form button {
  margin-bottom: 10px;
  font-size: 2rem;
}

.doors {
  align-self: stretch; /* esticar, e ocupar a tela inteira */
  display: flex;
  justify-content: space-around;

  flex-wrap: wrap;
}
</style>