import Vue from 'vue'
import App from './App.vue'
import router from './router';  // añadimos esta línea

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,                     // y esta también
}).$mount('#app')
