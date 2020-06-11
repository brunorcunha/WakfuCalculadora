<template>
  <v-app>
    <v-app-bar
      color="red"
      dark
      elevate-on-scroll
      app
    >
      <img src="./assets/logo.png" height="60" />

      <v-toolbar-title>Wakfu - {{ $t('calculadoraDeDano') }}</v-toolbar-title>

      <v-spacer />

      <Idioma />
    </v-app-bar>

    <v-content>
      <Calculadora />
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import Idioma from './components/Idioma'
import Calculadora from './components/Calculadora'

export default {
  name: 'App',
  components: { Calculadora, Idioma },
  computed: {
    ...mapGetters(['lang'])
  },
  watch: {
    lang (val) {
      this.$i18n.locale = val
    }
  },
  mounted () {
    this.$i18n.locale = this.lang
  }
}
</script>

<style>
  @import 'App.css';
</style>
