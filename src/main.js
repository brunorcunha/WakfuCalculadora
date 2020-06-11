import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import i18n from './i18n'
import store from './store'
import numeral from 'numeral'

store.subscribe((mutation, state) => {
  localStorage.setItem('store', JSON.stringify(state))
})

Vue.config.productionTip = false

Vue.filter('formatNumber', value => numeral(value).format("0,0"))

new Vue({
  vuetify,
  i18n,
  store,
  render: h => h(App),
  beforeCreate () {
    this.$store.commit('initializeStore')
  }
}).$mount('#app')
