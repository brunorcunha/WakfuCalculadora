<template>
  <v-app>
    <Calculadora />
  </v-app>
</template>

<script>
import Calculadora from './components/Calculadora'

export default {
  name: 'App',
  components: { Calculadora }
}
</script>

<style>
  @import 'App.css';
</style>
