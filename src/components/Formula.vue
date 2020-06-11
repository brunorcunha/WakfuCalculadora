<template>
  <v-menu
    offset-x
    :close-on-content-click="false"
  >
    <template #activator="{ on: menu }">
      <v-tooltip bottom>
        <template v-slot:activator="{ on: tooltip }">
          <img src="../assets/tuto.png" v-on="{ ...tooltip, ...menu }" />
        </template>
        <span>{{ $t('formula.titulo') }}</span>
      </v-tooltip>
    </template>
    <v-card>
      <v-subheader class="deep-orange accent-4 white--text">
        <b>{{ $t('formula.titulo') }}</b>
      </v-subheader>

      <v-divider />

      <div class="pa-2">
        <div class="px-12 py-4">
          [
          <span :class="`upper ${hover === 'dano' ? 'hoverAtivo' : ''}`" @mouseover="hover = 'dano'">{{ $t('formula.dano') }}</span>
          <span class="red--text"> x </span>
          <span :class="`upper ${hover === 'posicao' ? 'hoverAtivo' : ''}`" @mouseover="hover = 'posicao'">{{ $t('formula.posicao') }}</span>
          <span class="red--text"> x </span>
          <span :class="`upper ${hover === 'dominios' ? 'hoverAtivo' : ''}`" @mouseover="hover = 'dominios'">{{ $t('formula.dominios') }}</span>
          <span class="red--text"> x </span>
          <span :class="`upper ${hover === 'resistencia' ? 'hoverAtivo' : ''}`" @mouseover="hover = 'resistencia'">{{ $t('formula.resistencia') }}</span>
          <span class="red--text"> x </span>
          <span :class="`upper ${hover === 'danoscausados' ? 'hoverAtivo' : ''}`" @mouseover="hover = 'danoscausados'">{{ $t('formula.danoscausados') }}</span>
          ]
        </div>

        <v-card>
          <v-tabs
            v-model="tab"
            background-color="red"
            dark
          >
            <v-tab>{{ $t('formula.variaveis') }}</v-tab>
            <v-tab>{{ $t('formula.exemplo') }}</v-tab>
          </v-tabs>

          <v-tabs-items
            v-model="tab"
          >
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <div v-if="hover === 'dano'">{{ $t('formula.danobase') }} <span class="operador">{{ $t('formula.ou') }}</span> {{ $t('formula.danocritico') }}</div>
                  <v-row v-if="hover === 'resistencia'">
                    <v-col cols="4">
                      <div>(</div>
                      <div class="identacao1">100</div>
                      <div class="identacao2"><span class="red--text">-</span> (1 <span class="red--text">-</span> 0.8<sup>({{ $t('formula.resistencia') }} <span class="red--text">/</span> 100)</sup>) <span class="red--text">x</span> 100</div>
                      <div>) <span class="red--text">%</span></div>
                    </v-col>

                    <v-col cols="4" class="text-center bordasLaterais">
                      {{ $t('formula.equivalente') }} <br>
                      <span class="red--text">&lt; = &gt;</span>
                    </v-col>

                    <v-col cols="4">
                      0.8<sup>({{ $t('formula.resistencia') }} <span class="red--text">/</span> 100)</sup>
                    </v-col>
                  </v-row>
                  <div v-if="hover === 'danoscausados'">(100 <span class="red--text">+</span> {{ $t('formula.danoscausados') }}) <span class="red--text">%</span></div>
                  <div v-if="hover === 'posicao'">({{ $t('formula.danodefrente') }} <span class="operador">{{ $t('formula.ou') }}</span> {{ $t('formula.danodelado') }} <span class="operador">{{ $t('formula.ou') }}</span> {{ $t('formula.danodecostas') }}) <span class="red--text">%</span></div>
                  <template v-if="hover === 'dominios'">
                    <div>(</div>
                    <div class="identacao1">100</div>
                    <div class="identacao2"><span class="red--text">+</span> ({{ $t('formula.dominioadistancia') }} <span class="operador">{{ $t('formula.ou') }}</span> {{ $t('formula.dominiocac') }})</div>
                    <div class="identacao2"><span class="red--text">+</span> ({{ $t('formula.dominiost') }} <span class="operador">{{ $t('formula.ou') }}</span> {{ $t('formula.dominiozona') }})</div>
                    <div class="identacao2"><span class="operador">+ {{ $t('formula.se') }}</span> <span class="green--text">{{ $t('formula.danodecostas') }}</span> <span class="red--text">=&gt;</span> ({{ $t('formula.dominiocostas') }})</div>
                    <div class="identacao2"><span class="operador">+ {{ $t('formula.se') }}</span> <span class="green--text">{{ $t('formula.vida') }}</span> <span class="red--text">=&gt;</span> ({{ $t('formula.dominioberserk') }})</div>
                    <div class="identacao2"><span class="operador">+ {{ $t('formula.se') }}</span> <span class="green--text">{{ $t('formula.danocritico') }}</span> <span class="red--text">=&gt;</span> ({{ $t('formula.dominiocritico') }})</div>
                    <div>) <span class="red--text">%</span></div>
                  </template>
                </v-card-text>
              </v-card>
            </v-tab-item>

            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <div v-if="hover === 'dano'">{{ DanoBase }} <span class="operador">{{ $t('formula.ou') }}</span> {{ DanoCritico }}</div>
                  <v-row v-if="hover === 'resistencia'">
                    <v-col cols="4">
                      <div>(</div>
                      <div class="identacao1">100</div>
                      <div class="identacao2"><span class="red--text">-</span> ((1 <span class="red--text">-</span> 0.8<sup>({{ Resistencia }} <span class="red--text">/</span> 100)</sup>) <span class="red--text">x</span> 100)</div>
                      <div>) <span class="red--text">/</span> 100</div>
                    </v-col>

                    <v-col cols="4" class="text-center bordasLaterais">
                      {{ $t('formula.equivalente') }} <br>
                      <span class="red--text">&lt; = &gt;</span>
                    </v-col>

                    <v-col cols="4">
                      0.8<sup>({{ Resistencia }} <span class="red--text">/</span> 100)</sup>
                    </v-col>
                  </v-row>
                  <div v-if="hover === 'danoscausados'">(100 <span class="red--text">+</span> {{ DanosCausados }}) <span class="red--text">/</span> 100</div>
                  <div v-if="hover === 'posicao'">(100 <span class="operador">{{ $t('formula.ou') }}</span> 110 <span class="operador">{{ $t('formula.ou') }}</span> 125) <span class="red--text">/</span> 100</div>
                  <template v-if="hover === 'dominios'">
                    <div>(</div>
                    <div class="identacao1">100</div>
                    <div class="identacao2"><span class="red--text">+</span> ({{ MaestriaDistancia }} <span class="operador">{{ $t('formula.ou') }}</span> {{ MaestriaCorpoACorpo }})</div>
                    <div class="identacao2"><span class="red--text">+</span> ({{ MaestriaAlvoUnico }} <span class="operador">{{ $t('formula.ou') }}</span> {{ MaestriaZona }})</div>
                    <div class="identacao2"><span class="operador">+ {{ $t('formula.se') }}</span> <span class="green--text">{{ $t('formula.danodecostas') }}</span> <span class="red--text">=&gt;</span> ({{ MaestriaCostas }})</div>
                    <div class="identacao2"><span class="operador">+ {{ $t('formula.se') }}</span> <span class="green--text">{{ $t('formula.vida') }}</span> <span class="red--text">=&gt;</span> ({{ MaestriaBerserk }})</div>
                    <div class="identacao2"><span class="operador">+ {{ $t('formula.se') }}</span> <span class="green--text">{{ $t('formula.danocritico') }}</span> <span class="red--text">=&gt;</span> ({{ MaestriaCritico }})</div>
                    <div>) <span class="red--text">/</span> 100</div>
                  </template>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>

      </div>
    </v-card>

  </v-menu>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Formula',
  data: () => ({
    tab: null,
    constante: 0.800000011920929,
    hover: 'dano'
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
    ])
  }
}
</script>

<style scoped>

</style>
