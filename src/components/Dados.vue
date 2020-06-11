<template>
  <v-row no-gutters class="py-4">
    <v-col cols="6" class="pr-1 pb-3"><DadosCampo :value="DanoBase" :label="$t('danoBase')" @input="setDanoBase($event)" icon="tags_09" /></v-col>
    <v-col cols="6" class="pr-1 pb-3"><DadosCampo :value="DanoCritico" :label="$t('danoCritico')" @input="setDanoCritico($event)" icon="mini_10" /></v-col>
    <v-col cols="6" class="pr-1 pb-3"><DadosCampo :value="MaestriaElemental" :label="$t('dominioElemental')" @input="setMaestriaElemental($event)" icon="chromatic" /></v-col>
    <v-col cols="6" class="pr-1 pb-3"><DadosCampo :value="Resistencia" :label="$t('resistencia')" @input="setResistencia($event)" icon="tags_03" /></v-col>
    <v-col cols="6" class="pr-1 pb-3"><DadosCampo :value="MaestriaDistancia" :label="$t('dominioDistancia')" @input="setMaestriaDistancia($event)" icon="tags_20" /></v-col>
    <v-col cols="6" class="pr-1 pb-3"><DadosCampo :value="MaestriaCorpoACorpo" :label="$t('dominioCorpoaCorpo')" @input="setMaestriaCorpoACorpo($event)" icon="tags_23" /></v-col>
    <v-col cols="6" class="pr-1 pb-3"><DadosCampo :value="MaestriaAlvoUnico" :label="$t('dominioAlvoUnico')" @input="setMaestriaAlvoUnico($event)" icon="tags_19" /></v-col>
    <v-col cols="6" class="pr-1 pb-3"><DadosCampo :value="MaestriaZona" :label="$t('dominioZona')" @input="setMaestriaZona($event)" icon="tags_21" /></v-col>
    <v-col cols="6" class="pr-1 pb-3"><DadosCampo :value="MaestriaCritico" :label="$t('dominioCritico')" @input="setMaestriaCritico($event)" icon="tags_40" /></v-col>
    <v-col cols="6" class="pr-1 pb-3"><DadosCampo :value="MaestriaCostas" :label="$t('dominioCostas')" @input="setMaestriaCostas($event)" icon="tags_26" /></v-col>
    <v-col cols="6" class="pr-1 pb-3"><DadosCampo :value="MaestriaBerserk" :label="$t('dominioBerserk')" @input="setMaestriaBerserk($event)" icon="tags_17" /></v-col>
    <v-col cols="6" class="pr-1 pb-3"><DadosCampo :value="DanosCausados" :label="$t('danosCausados')" @input="setDanosCausados($event)" icon="tags_22" /></v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import DadosCampo from './DadosCampo'

export default {
  name: 'Dados',
  components: { DadosCampo },
  computed: {
    ...mapGetters([
      'lang',
      'DanoBase',
      'DanoCritico',
      'DanosCausados',
      'MaestriaElemental',
      'MaestriaDistancia',
      'MaestriaCorpoACorpo',
      'MaestriaAlvoUnico',
      'MaestriaZona',
      'MaestriaCritico',
      'MaestriaCostas',
      'MaestriaBerserk',
      'Resistencia'
    ])
  },
  methods: {
    ...mapActions([
      'setDanoBase',
      'setDanoCritico',
      'setDanosCausados',
      'setMaestriaElemental',
      'setMaestriaDistancia',
      'setMaestriaCorpoACorpo',
      'setMaestriaAlvoUnico',
      'setMaestriaZona',
      'setMaestriaCritico',
      'setMaestriaCostas',
      'setMaestriaBerserk',
      'setResistencia'
    ])
  }
}
</script>

<style scoped>

</style>
