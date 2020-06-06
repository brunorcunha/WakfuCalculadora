<template>
  <v-app>
    <Calculadora />
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import Calculadora from './components/Calculadora'

export default {
  name: 'App',
  components: { Calculadora },
  computed: {
    ...mapGetters(['lang'])
  },
  mounted () {
    this.$i18n.locale = this.lang
  }
}
</script>

<style>
  @import 'App.css';
</style>
