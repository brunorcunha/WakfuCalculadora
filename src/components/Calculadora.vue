<template>
  <v-container>
    <v-row>
      <v-col :cols="$vuetify.breakpoint.smAndDown ? 12 : 4">
        <div class="formula">
          <div :class="`flutuante ${$vuetify.breakpoint.mdOnly ? 'mr-n5' : ''}`">
            <Formula />
          </div>
        </div>
        <v-row>
          <Grid :tipoSpell="tipoSpell" />
        </v-row>
        <v-row no-gutters>
          <v-col class="pt-3">
            <v-label>{{ $t('feitico') }}:</v-label>
            <v-btn-toggle
              v-model="tipoSpell"
              borderless
              :class="$vuetify.breakpoint.mdAndDown ? null : 'ml-4'"
              dark
              dense
              mandatory
            >
              <v-btn value="st" color="red" :class="$vuetify.breakpoint.mdAndDown ? 'px-5' : 'px-6'">
                <img src="../assets/st.png" class="mr-2" />
                <span>{{ $t('alvoUnico') }}</span>
              </v-btn>
              <v-btn value="zona" color="red" :class="$vuetify.breakpoint.mdAndDown ? 'px-5' : 'px-6'">
                <img src="../assets/zona.png" class="mr-2" />
                <span>{{ $t('zona') }}</span>
              </v-btn>
            </v-btn-toggle>
          </v-col>
        </v-row>
        <Dados />
      </v-col>
      <v-col :cols="$vuetify.breakpoint.smAndDown ? 12 : 8">
        <v-card flat>
          <v-tabs
              v-model="tab"
              background-color="red"
              dark
              grow
          >
            <v-tab>{{ $t('frente') }}</v-tab>
            <v-tab>{{ $t('lado') }}</v-tab>
            <v-tab>{{ $t('costas') }}</v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item v-for="i in 3" :key="i">
              <v-card flat>
                <v-data-table
                  :headers="headers"
                  :items="dadosTabela[i-1]"
                  hide-default-header
                  hide-default-footer
                  class="borderClaro"
                >
                  <template #header="{ props: { headers, options: { sortBy, sortDesc } }, on: { sort } }">
                    <thead class="v-data-table-header">
                    <tr>
                      <th
                        v-for="(header, i) in headers"
                        :key="header.text"
                        :class="`${i <= 1 ? 'text-start' : 'text-right'} sortable ${sortBy[0] === header.value ? (sortDesc[0] ? 'active desc' : 'active asc') : ''}`"
                        @click="sort(header.value)"
                      >
                        <v-icon v-if="header.align === 'right'" size="18" class="v-data-table-header__icon">mdi-arrow-up</v-icon>
                        <span>{{ $t(header.text) }}</span>
                        <v-icon v-if="header.align !== 'right'" size="18" class="v-data-table-header__icon">mdi-arrow-up</v-icon>
                      </th>
                    </tr>
                    </thead>
                  </template>
                  <template #item="{ item }">
                    <tr>
                      <td>{{ $t(item.posicao) }}</td>
                      <td>
                        <template v-if="tipoSpell !== item.feitico">{{ $t(item.feitico) }}</template>
                        <template v-else><b>{{ $t(item.feitico) }}</b></template>
                      </td>
                      <td class="text-right">{{ item.normal | formatNumber }}</td>
                      <td class="text-right">{{ item.berserk | formatNumber }}</td>
                      <td class="critico text-right">{{ item.critico | formatNumber }}</td>
                      <td class="critico text-right">{{ item.criticoberserk | formatNumber }}</td>
                    </tr>
                  </template>
                </v-data-table>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import Grid from './Grid'
import Dados from './Dados'
import Formula from './Formula'

export default {
  name: 'Calculadora',
  components: { Dados, Grid, Formula },
  data: () => ({
    tab: 0,
    constante: 0.800000011920929,
    DanoFrente: 100,
    DanoLado: 110,
    DanoCostas: 125,
    tipoSpell: 'st',
    headers: [
      { text: 'posicao', value: 'posicao' },
      { text: 'feitico', value: 'feitico' },
      { text: 'danoResistencia', value: 'normal', align: 'right' },
      { text: 'danoResistenciaBerserk', value: 'berserk', align: 'right' },
      { text: 'criticoResistencia', value: 'critico', class: 'red--text', align: 'right' },
      { text: 'criticoResistenciaBerserk', value: 'criticoberserk', class: 'red--text', align: 'right' }
    ]
  }),
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
    ]),
    valorDanoFrente () {
      return this.DanoFrente / 100
    },
    valorDanoLado () {
      return this.DanoLado / 100
    },
    valorDanoCostas () {
      return this.DanoCostas / 100
    },
    valorDanosCausados () {
      return (this.DanosCausados + 100) / 100
    },
    valorResistencia () {
      if (this.Resistencia <= 0) return 1
      return (Math.pow(this.constante, this.Resistencia / 100)).toFixed(2)
    },
    dadosTabela () {
      return [this.montarArray('frente'), this.montarArray('lado'), this.montarArray('costas')]
    }
  },
  methods: {
    calcularDano (posicao, ehCritico, ehBerserk, ehCaC, ehST) {
      const calculoDano = !ehCritico ? this.DanoBase : this.DanoCritico
      const calculoDanosCausados = this.valorDanosCausados
      const ehCostas = (posicao === 'costas')
      let calculoPosicao = this.valorDanoFrente
      if (posicao === 'lado') calculoPosicao = this.valorDanoLado
      else if (ehCostas) calculoPosicao = this.valorDanoCostas
      const calculoDominios = this.calcularDominios(ehCostas, ehBerserk, ehCaC, ehST, ehCritico)
      const calculoResistencia = this.valorResistencia
      return Math.ceil(calculoDano * calculoPosicao * calculoDominios * calculoDanosCausados * calculoResistencia)
    },
    calcularDominios (ehCostas, ehBerserk, ehCaC, ehST, ehCritico) {
      const calculoCostas = ehCostas ? this.MaestriaCostas : 0
      const calculoCritico = ehCritico ? this.MaestriaCritico : 0
      const calculoBerserk = ehBerserk ? this.MaestriaBerserk : 0
      const calculoDistancia = ehCaC ? this.MaestriaCorpoACorpo : this.MaestriaDistancia
      const calculoAlvo = ehST ? this.MaestriaAlvoUnico : this.MaestriaZona
      return (100 + this.MaestriaElemental + calculoCostas + calculoDistancia + calculoAlvo + calculoCritico + calculoBerserk) / 100
    },
    montarArray (posicao) {
      const alvos = ['st', 'zona']
      const distancias = ['cac', 'distancia']

      const array = []
      for (let i in distancias) {
        const distancia = distancias[i]
        const ehCaC = distancia === 'cac'
        for (let j in alvos) {
          const alvo = alvos[j]
          const ehST = alvo === 'st'
          array.push({
            posicao: distancia,
            feitico: alvo,
            normal: this.calcularDano(posicao, false, false, ehCaC, ehST),
            critico: this.calcularDano(posicao, true, false, ehCaC, ehST),
            berserk: this.calcularDano(posicao, false, true, ehCaC, ehST),
            criticoberserk: this.calcularDano(posicao, true, true, ehCaC, ehST),
          })
        }
      }
      return array
    }
  }
}
</script>
