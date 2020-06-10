<template>
  <v-menu
    open-on-hover
    offset-x
    min-width="500"
    content-class="elevation-0 touchevent"
  >
    <template #activator="{ on }">
      <div v-on="spell === 'borda' || spell === 'meio' ? null : on" :class="`bloco ${posicao} ${spell}`"></div>
    </template>
    <v-row no-gutters class="pa-3">
      <v-col class="pa-1" md="6" sm="12" xs="12">
        <v-card class="elevation-5">
          <v-subheader class="deep-orange accent-4 white--text px-4">
            {{ $t('danoBase') }}
            <v-spacer />
            <b>{{ DanoBase }}</b>
          </v-subheader>

          <v-divider />

          <v-list
              dense
              subheader
          >
            <v-list-item class="fontMenor">
              <v-list-item-content>
                <v-list-item-title>{{ traducaoPosicao }}</v-list-item-title>
              </v-list-item-content>
              x{{ valorPosicao }}%
            </v-list-item>

            <v-divider />

            <v-list-item class="fontMenor">
              <v-list-item-content>
                <v-list-item-title>{{ traducaoSpell }}</v-list-item-title>
              </v-list-item-content>
              +{{ valorSpell }}%
            </v-list-item>

            <v-divider />

            <template v-if="MaestriaElemental > 0">
              <v-list-item class="fontMenor">
                <v-list-item-content>
                  <v-list-item-title>{{ $t('dominioElemental') }}</v-list-item-title>
                </v-list-item-content>
                +{{ MaestriaElemental }}%
              </v-list-item>

              <v-divider />
            </template>

            <v-list-item class="fontMenor">
              <v-list-item-content>
                <v-list-item-title>{{ traducaoTipoSpell }}</v-list-item-title>
              </v-list-item-content>
              +{{ valorTipoSpell }}%
            </v-list-item>

            <v-divider />

            <template v-if="MaestriaBerserk > 0">
              <v-list-item class="fontMenor">
                <v-list-item-content>
                  <v-list-item-title>{{ $t('dominioBerserk') }}</v-list-item-title>
                </v-list-item-content>
                +{{ MaestriaBerserk }}%
              </v-list-item>

              <v-divider />
            </template>

            <template v-if="ehDanoCostas && MaestriaCostas > 0">
              <v-list-item class="fontMenor">
                <v-list-item-content>
                  <v-list-item-title>{{ $t('dominioCostas') }}</v-list-item-title>
                </v-list-item-content>
                +{{ MaestriaCostas }}%
              </v-list-item>

              <v-divider />
            </template>

            <template v-if="DanosCausados > 0">
              <v-list-item class="fontMenor">
                <v-list-item-content>
                  <v-list-item-title>{{ $t('danosCausados') }}</v-list-item-title>
                </v-list-item-content>
                x{{ 100 + DanosCausados }}%
              </v-list-item>

              <v-divider />
            </template>

            <template v-if="valorResistencia < 100">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>{{ $t('subTotal') }}</v-list-item-title>
                </v-list-item-content>
                <b>{{ danoSemResistenciaSTR }}</b>
              </v-list-item>

              <v-divider />

              <v-list-item class="fontMenor">
                <v-list-item-content>
                  <v-list-item-title>{{ $t('resistencia') }}</v-list-item-title>
                </v-list-item-content>
                -{{ 100 - valorResistencia }}%
              </v-list-item>

              <v-divider />
            </template>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>{{ $t('danoResistencia') }}</v-list-item-title>
              </v-list-item-content>
              <b>{{ danoResistencia }}</b>
            </v-list-item>

            <v-divider />

            <template v-if="MaestriaBerserk > 0">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>{{ $t('danoResistenciaBerserk') }}</v-list-item-title>
                </v-list-item-content>
                <b>{{ danoResistenciaBerserk }}</b>
              </v-list-item>

              <v-divider />
            </template>

          </v-list>
        </v-card>
      </v-col>
      <v-col class="pa-1" md="6" sm="12" xs="12">
        <v-card>
          <v-subheader class="deep-orange accent-4 white--text px-4">
            {{ $t('danoCritico') }}
            <v-spacer />
            <b>{{ DanoCritico }}</b>
          </v-subheader>

          <v-divider />

          <v-list
              dense
              subheader
          >
            <v-list-item class="fontMenor">
              <v-list-item-content>
                <v-list-item-title>{{ traducaoPosicao }}</v-list-item-title>
              </v-list-item-content>
              x{{ valorPosicao }}%
            </v-list-item>

            <v-divider />

            <v-list-item class="fontMenor">
              <v-list-item-content>
                <v-list-item-title>{{ traducaoSpell }}</v-list-item-title>
              </v-list-item-content>
              +{{ valorSpell }}%
            </v-list-item>

            <v-divider />

            <template v-if="MaestriaElemental > 0">
              <v-list-item class="fontMenor">
                <v-list-item-content>
                  <v-list-item-title>{{ $t('dominioElemental') }}</v-list-item-title>
                </v-list-item-content>
                +{{ MaestriaElemental }}%
              </v-list-item>

              <v-divider />
            </template>

            <v-list-item class="fontMenor">
              <v-list-item-content>
                <v-list-item-title>{{ traducaoTipoSpell }}</v-list-item-title>
              </v-list-item-content>
              +{{ valorTipoSpell }}%
            </v-list-item>

            <v-divider />

            <template v-if="MaestriaBerserk > 0">
              <v-list-item class="fontMenor">
                <v-list-item-content>
                  <v-list-item-title>{{ $t('dominioBerserk') }}</v-list-item-title>
                </v-list-item-content>
                +{{ MaestriaBerserk }}%
              </v-list-item>

              <v-divider />
            </template>

            <template v-if="MaestriaCritico > 0">
              <v-list-item class="fontMenor">
                <v-list-item-content>
                  <v-list-item-title>{{ $t('dominioCritico') }}</v-list-item-title>
                </v-list-item-content>
                +{{ MaestriaCritico }}%
              </v-list-item>

              <v-divider />
            </template>

            <template v-if="ehDanoCostas && MaestriaCostas > 0">
              <v-list-item class="fontMenor">
                <v-list-item-content>
                  <v-list-item-title>{{ $t('dominioCostas') }}</v-list-item-title>
                </v-list-item-content>
                +{{ MaestriaCostas }}%
              </v-list-item>

              <v-divider />
            </template>

            <template v-if="DanosCausados > 0">
              <v-list-item class="fontMenor">
                <v-list-item-content>
                  <v-list-item-title>{{ $t('danosCausados') }}</v-list-item-title>
                </v-list-item-content>
                x{{ 100 + DanosCausados }}%
              </v-list-item>

              <v-divider />
            </template>

            <template v-if="valorResistencia < 100">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>{{ $t('subTotalCritico') }}</v-list-item-title>
                </v-list-item-content>
                <b>{{ criticoSemResistenciaSTR }}</b>
              </v-list-item>

              <v-divider />

              <template v-if="MaestriaBerserk > 0">
                <v-list-item class="fontMenor">
                  <v-list-item-content>
                    <v-list-item-title>{{ $t('resistencia') }}</v-list-item-title>
                  </v-list-item-content>
                  -{{ 100 - valorResistencia }}%
                </v-list-item>

                <v-divider />
              </template>
            </template>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>{{ $t('criticoResistencia') }}</v-list-item-title>
              </v-list-item-content>
              <b class="red--text">{{ criticoResistencia }}</b>
            </v-list-item>

            <v-divider />

            <template v-if="MaestriaBerserk > 0">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>{{ $t('criticoResistenciaBerserk') }}</v-list-item-title>
                </v-list-item-content>
                <b class="red--text">{{ criticoResistenciaBerserk }}</b>
              </v-list-item>

              <v-divider />
            </template>

          </v-list>
        </v-card>
      </v-col>
    </v-row>

  </v-menu>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Bloco',
  props: {
    posicao: { type: String, default: '' },
    tipoSpell: { type: String, default: '' },
    spell: { type: String, default: '' }
  },
  data: () => ({
    constante: 0.800000011920929
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
    ]),
    ehDanoCostas () {
      return this.posicao === 'costas'
    },
    traducaoPosicao () {
      return this.$i18n.t(this.posicao)
    },
    valorPosicao () {
      switch (this.posicao) {
        case 'frente': return 100
        case 'costas': return 125
      }
      return 110
    },
    traducaoSpell () {
      return (this.spell === 'cac') ? this.$i18n.t('dominioCorpoaCorpo') : this.$i18n.t('dominioDistancia')
    },
    valorSpell () {
      return (this.spell === 'cac') ? this.MaestriaCorpoACorpo : this.MaestriaDistancia
    },
    traducaoTipoSpell () {
      return (this.tipoSpell === 'st') ? this.$i18n.t('dominioAlvoUnico') : this.$i18n.t('dominioZona')
    },
    valorTipoSpell () {
      return (this.tipoSpell === 'st') ? this.MaestriaAlvoUnico : this.MaestriaZona
    },
    valorRear () {
      return this.ehDanoCostas ? this.MaestriaCostas : 0
    },
    posicaoReal () {
      return this.valorPosicao / 100
    },
    resistenciaReal () {
      return this.Resistencia <= 0 ? 1 : (Math.pow(this.constante, this.Resistencia / 100)).toFixed(2)
    },
    valorResistencia () {
      return Math.round(this.resistenciaReal * 100)
    },
    valorElemental () {
      return (100 + this.MaestriaElemental + this.valorRear + this.valorSpell + this.valorTipoSpell)
    },
    valorDanosCausados () {
      return (this.DanosCausados + 100) / 100
    },
    danoSemResistencia () {
      return (this.valorElemental / 100) * this.DanoBase
    },
    danoSemResistenciaSTR () {
      return Math.ceil(this.danoSemResistencia * this.valorDanosCausados * this.posicaoReal)
    },
    criticoSemResistencia () {
      return ((this.valorElemental + this.MaestriaCritico) / 100) * this.DanoCritico
    },
    criticoSemResistenciaSTR () {
      return Math.ceil(this.criticoSemResistencia * this.valorDanosCausados * this.posicaoReal)
    },
    danoSemResistenciaBerserk () {
      return ((this.valorElemental + this.MaestriaBerserk) / 100) * this.DanoBase
    },
    criticoSemResistenciaBerserk () {
      return ((this.valorElemental + this.MaestriaBerserk + this.MaestriaCritico) / 100) * this.DanoCritico
    },
    danoResistencia () {
      return Math.ceil(this.danoSemResistencia * this.resistenciaReal * this.valorDanosCausados * this.posicaoReal)
    },
    criticoResistencia () {
      return Math.ceil(this.criticoSemResistencia * this.resistenciaReal * this.valorDanosCausados * this.posicaoReal)
    },
    danoResistenciaBerserk () {
      return Math.ceil(this.danoSemResistenciaBerserk * this.resistenciaReal * this.valorDanosCausados * this.posicaoReal)
    },
    criticoResistenciaBerserk () {
      return Math.ceil(this.criticoSemResistenciaBerserk * this.resistenciaReal * this.valorDanosCausados * this.posicaoReal)
    }
  }
}
</script>

<style scoped>

</style>
