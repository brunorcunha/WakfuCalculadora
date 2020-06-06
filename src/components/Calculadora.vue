<template>
  <v-container>
    <Idioma />
    <Grid :tipoSpell="tipoSpell" />

    <v-row>
      <v-col>
        <v-radio-group v-model="tipoSpell" row hide-details :label="$t('feitico')">
          <v-radio :label="$t('alvoUnico')" value="st"></v-radio>
          <v-radio :label="$t('zona')" value="zona"></v-radio>
        </v-radio-group>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="2" sm="12"><v-text-field outlined dense hide-details :value="DanoBase" :label="$t('danoBase')" @input="setDanoBase($event)" /></v-col>
      <v-col md="2" sm="12"><v-text-field outlined dense hide-details :value="DanoCritico" :label="$t('danoCritico')" @input="setDanoCritico($event)" /></v-col>
      <v-col md="2" sm="12"><v-text-field outlined dense hide-details :value="MaestriaElemental" :label="$t('dominioElemental')" @input="setMaestriaElemental($event)" /></v-col>
      <v-col md="2" sm="12"><v-text-field outlined dense hide-details :value="Resistencia" :label="$t('resistencia')" @input="setResistencia($event)" /></v-col>
      <v-col md="2" sm="12"><v-text-field outlined dense hide-details :value="MaestriaDistancia" :label="$t('dominioDistancia')" @input="setMaestriaDistancia($event)" /></v-col>
      <v-col md="2" sm="12"><v-text-field outlined dense hide-details :value="MaestriaCorpoACorpo" :label="$t('dominioCorpoaCorpo')" @input="setMaestriaCorpoACorpo($event)" /></v-col>
      <v-col md="2" sm="12"><v-text-field outlined dense hide-details :value="MaestriaAlvoUnico" :label="$t('dominioAlvoUnico')" @input="setMaestriaAlvoUnico($event)" /></v-col>
      <v-col md="2" sm="12"><v-text-field outlined dense hide-details :value="MaestriaZona" :label="$t('dominioZona')" @input="setMaestriaZona($event)" /></v-col>
      <v-col md="2" sm="12"><v-text-field outlined dense hide-details :value="MaestriaCritico" :label="$t('dominioCritico')" @input="setMaestriaCritico($event)" /></v-col>
      <v-col md="2" sm="12"><v-text-field outlined dense hide-details :value="MaestriaCostas" :label="$t('dominioCostas')" @input="setMaestriaCostas($event)" /></v-col>
      <v-col md="2" sm="12"><v-text-field outlined dense hide-details :value="MaestriaBerserk" :label="$t('dominioBerserk')" @input="setMaestriaBerserk($event)" /></v-col>
      <v-col md="2" sm="12"><v-text-field outlined dense hide-details :value="DanosCausados" :label="$t('danosCausados')" @input="setDanosCausados($event)" /></v-col>
    </v-row>

    <hr />

    <div>
      <div>
        <div>- Fórmula:</div>
        <div>[ DANOBASEOUCRITICO x POSIÇÃO X DOMÍNIOS x (100 - RESISTÊNCIA) x DANOSCAUSADOS ]</div>
        <div>- Variáveis:</div>
        <div><b>DANOBASEOUCRITICO</b> = (DanoBase <span class="red--text">OU</span> DanoCritico)</div>
        <div><b>DOMÍNIOS</b> = (100 + DominioElemental + DISTANCIAouCORPOACORPO + ALVOUNICOouZONA + DOMINIOCOSTAS + BERSERK + CRITICO)%</div>
        <div><b>RESISTÊNCIA</b> = (0.8<sup>(Resistencia / 100)</sup>)</div>
        <div><b>DANOSCAUSADOS</b> = (100 + DanosCausados)%</div>
        <div><b>POSIÇÃO</b> = (DanoDeFrente <span class="red--text">OU</span> DanoDeLado <span class="red--text">OU</span> DanoDeCostas)</div>
        <div><b>DISTANCIAouCORPOACORPO</b> = (DominioADistancia <span class="red--text">OU</span> DominioCorpoACorpo)</div>
        <div><b>ALVOUNICOouZONA</b> = (DominioAlvoUnico <span class="red--text">OU</span> DominioZona)</div>
        <div><b>DOMINIOCOSTAS</b> = <span class="red--text">SE</span> DanoDeCostas <span class="red--text">=&gt;</span> (DominioCostas) <span class="red--text">SENÃO</span> (0)</div>
        <div><b>BERSERK</b> = <span class="red--text">SE</span> VIDA &lt; 50% <span class="red--text">=&gt;</span> (DominioBerserk) <span class="red--text">SENÃO</span> (0)</div>
        <div><b>CRITICO</b> = <span class="red--text">SE</span> DanoCritico <span class="red--text">=&gt;</span> (DominioCritico) <span class="red--text">SENÃO</span> (0)</div>
        <div>- Exemplo:</div>
        <div>[ (DanoCritico) x (DanoCostas) x (100 + DominioElemental + DominioDistancia + DominioAlvoUnico + DominioCostas + DominioBerserk + DominioCritico)% x (100 - 0,8 <sup>(Resistencia / 100)</sup>)% x (100 + DanosCausados)% ]</div>
        <div>[ {{ DanoCritico }} x {{ DanoCostas }}% x (100 + {{MaestriaElemental}} + {{ MaestriaDistancia }} + {{ MaestriaAlvoUnico }} + {{ MaestriaCostas }} + {{ MaestriaBerserk }} + {{ MaestriaCritico }})% x (100 - {{ Math.round((1 - Math.pow(this.constante, Resistencia / 100)) * 100) }})% x (100 + {{ DanosCausados }})% ]</div>
        <div>[ {{ DanoCritico }} x {{ DanoCostas }}% x {{ 100 + MaestriaElemental + MaestriaDistancia + MaestriaAlvoUnico + MaestriaCostas + MaestriaBerserk + MaestriaCritico }}% x {{ (Math.round(Math.pow(this.constante, Resistencia / 100) * 100)) }}% x {{ (100 + DanosCausados) }}% ]</div>
        <div>= Resultado: {{ Math.ceil((DanoCostas / 100) * (DanoCritico) * ((100 + MaestriaElemental + MaestriaDistancia + MaestriaAlvoUnico + MaestriaCostas + MaestriaBerserk + MaestriaCritico) / 100) * (Math.pow(this.constante, Resistencia / 100)) * ((100 + DanosCausados) / 100)) }}</div>
      </div>

    </div>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Idioma from './Idioma'
import Grid from './Grid'

export default {
  name: 'Calculadora',
  components: { Idioma, Grid },
  data: () => ({
    constante: 0.800000011920929,
    DanoFrente: 100,
    DanoLado: 110,
    DanoCostas: 125,
    tipoSpell: 'st'
  }),
  computed: {
    ...mapGetters([
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
