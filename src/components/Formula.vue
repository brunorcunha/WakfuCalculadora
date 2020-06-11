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
        <span>Fórmula</span>
      </v-tooltip>
    </template>
    <v-card>
      <v-subheader class="deep-orange accent-4 white--text">
        <b>Fórmula</b>
      </v-subheader>

      <v-divider />

      <div class="pa-2">
        <div class="px-12 py-4">
          [
          <span :class="hover === 'dano' ? 'hoverAtivo' : ''" @mouseover="hover = 'dano'">DANOBASEOUCRITICO</span>
          <span class="red--text"> x </span>
          <span :class="hover === 'posicao' ? 'hoverAtivo' : ''" @mouseover="hover = 'posicao'">POSIÇÃO</span>
          <span class="red--text"> x </span>
          <span :class="hover === 'dominios' ? 'hoverAtivo' : ''" @mouseover="hover = 'dominios'">DOMÍNIOS</span>
          <span class="red--text"> x </span>
          <span :class="hover === 'resistencia' ? 'hoverAtivo' : ''" @mouseover="hover = 'resistencia'">RESISTÊNCIA</span>
          <span class="red--text"> x </span>
          <span :class="hover === 'danoscausados' ? 'hoverAtivo' : ''" @mouseover="hover = 'danoscausados'">DANOSCAUSADOS</span>
          ]
        </div>

        <v-card>
          <v-tabs
            v-model="tab"
            background-color="red"
            dark
          >
            <v-tab>Variáveis</v-tab>
            <v-tab>Exemplo</v-tab>
          </v-tabs>

          <v-tabs-items
            v-model="tab"
          >
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <div v-if="hover === 'dano'">DanoBase <span class="red--text">OU</span> DanoCritico</div>
                  <v-row v-if="hover === 'resistencia'">
                    <v-col>
                      <div>(</div>
                      <div class="identacao1">100</div>
                      <div class="identacao2"><span class="red--text">-</span> (1 <span class="red--text">-</span> 0.8<sup>(Resistencia <span class="red--text">/</span> 100)</sup>) <span class="red--text">x</span> 100</div>
                      <div>) <span class="red--text">%</span></div>
                    </v-col>

                    <v-col class="text-center bordasLaterais">
                      Equivalente <br>
                      <span class="red--text">&lt; = &gt;</span>
                    </v-col>

                    <v-col>
                      0.8<sup>(Resistencia <span class="red--text">/</span> 100)</sup>
                    </v-col>
                  </v-row>
                  <div v-if="hover === 'danoscausados'">(100 <span class="red--text">+</span> DanosCausados) <span class="red--text">%</span></div>
                  <div v-if="hover === 'posicao'">(DanoDeFrente <span class="red--text">OU</span> DanoDeLado <span class="red--text">OU</span> DanoDeCostas) <span class="red--text">%</span></div>
                  <template v-if="hover === 'dominios'">
                    <div>(</div>
                    <div class="identacao1">100</div>
                    <div class="identacao2"><span class="red--text">+</span> (DominioADistancia <span class="red--text">OU</span> DominioCorpoACorpo)</div>
                    <div class="identacao2"><span class="red--text">+</span> (DominioAlvoUnico <span class="red--text">OU</span> DominioZona)</div>
                    <div class="identacao2"><span class="red--text">+ SE</span> <span class="green--text">DanoDeCostas</span> <span class="red--text">=&gt;</span> (DominioCostas)</div>
                    <div class="identacao2"><span class="red--text">+ SE</span> <span class="green--text">VIDA &lt; 50%</span> <span class="red--text">=&gt;</span> (DominioBerserk)</div>
                    <div class="identacao2"><span class="red--text">+ SE</span> <span class="green--text">DanoCritico</span> <span class="red--text">=&gt;</span> (DominioCritico)</div>
                    <div>) <span class="red--text">%</span></div>
                  </template>
                </v-card-text>
              </v-card>
            </v-tab-item>

            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <div v-if="hover === 'dano'">{{ DanoBase }} <span class="red--text">OU</span> {{ DanoCritico }}</div>
                  <v-row v-if="hover === 'resistencia'">
                    <v-col>
                      <div>(</div>
                      <div class="identacao1">100</div>
                      <div class="identacao2"><span class="red--text">-</span> ((1 <span class="red--text">-</span> 0.8<sup>({{ Resistencia }} <span class="red--text">/</span> 100)</sup>) <span class="red--text">x</span> 100)</div>
                      <div>) <span class="red--text">/</span> 100</div>
                    </v-col>

                    <v-col class="text-center bordasLaterais">
                      Equivalente <br>
                      <span class="red--text">&lt; = &gt;</span>
                    </v-col>

                    <v-col>
                      0.8<sup>({{ Resistencia }} <span class="red--text">/</span> 100)</sup>
                    </v-col>
                  </v-row>
                  <div v-if="hover === 'danoscausados'">(100 <span class="red--text">+</span> {{ DanosCausados }}) <span class="red--text">/</span> 100</div>
                  <div v-if="hover === 'posicao'">(100 <span class="red--text">OU</span> 110 <span class="red--text">OU</span> 125) <span class="red--text">/</span> 100</div>
                  <template v-if="hover === 'dominios'">
                    <div>(</div>
                    <div class="identacao1">100</div>
                    <div class="identacao2"><span class="red--text">+</span> ({{ MaestriaDistancia }} <span class="red--text">OU</span> {{ MaestriaCorpoACorpo }})</div>
                    <div class="identacao2"><span class="red--text">+</span> ({{ MaestriaAlvoUnico }} <span class="red--text">OU</span> {{ MaestriaZona }})</div>
                    <div class="identacao2"><span class="red--text">+ SE</span> <span class="green--text">DanoDeCostas</span> <span class="red--text">=&gt;</span> ({{ MaestriaCostas }})</div>
                    <div class="identacao2"><span class="red--text">+ SE</span> <span class="green--text">VIDA &lt; 50%</span> <span class="red--text">=&gt;</span> ({{ MaestriaBerserk }})</div>
                    <div class="identacao2"><span class="red--text">+ SE</span> <span class="green--text">DanoCritico</span> <span class="red--text">=&gt;</span> ({{ MaestriaCritico }})</div>
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
