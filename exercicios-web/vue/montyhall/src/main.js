import Vue from 'vue'
import App from './App'

// instanciar o Vue
new Vue({
    render:h => h(App)      // outra maneira, o h no caso seria o createElement
    // render(createElement) { // reponsável por criar o componente
    //     return createElement(App)
    // }
}).$mount("#app")

// .$mount("#app") é a mesma coisa de usa el: "#app"