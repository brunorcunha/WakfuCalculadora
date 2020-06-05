import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    DanoBase: 142,
    DanoCritico: 178,
    DanosCausados: 10,
    MaestriaElemental: 1036,
    MaestriaDistancia: 461,
    MaestriaCorpoACorpo: 0,
    MaestriaAlvoUnico: 186,
    MaestriaZona: 160,
    MaestriaCritico: 306,
    MaestriaCostas: 0,
    MaestriaBerserk: 0,
    Resistencia: 302
  },
  getters: {
    DanoBase: state => state.DanoBase,
    DanoCritico: state => state.DanoCritico,
    DanosCausados: state => state.DanosCausados,
    MaestriaElemental: state => state.MaestriaElemental,
    MaestriaDistancia: state => state.MaestriaDistancia,
    MaestriaCorpoACorpo: state => state.MaestriaCorpoACorpo,
    MaestriaAlvoUnico: state => state.MaestriaAlvoUnico,
    MaestriaZona: state => state.MaestriaZona,
    MaestriaCritico: state => state.MaestriaCritico,
    MaestriaCostas: state => state.MaestriaCostas,
    MaestriaBerserk: state => state.MaestriaBerserk,
    Resistencia: state => state.Resistencia
  },
  mutations: {
    setDanoBase: (state, DanoBase) => { state.DanoBase = DanoBase },
    setDanoCritico: (state, DanoCritico) => { state.DanoCritico = DanoCritico },
    setDanosCausados: (state, DanosCausados) => { state.DanosCausados = DanosCausados },
    setMaestriaElemental: (state, MaestriaElemental) => { state.MaestriaElemental = MaestriaElemental },
    setMaestriaDistancia: (state, MaestriaDistancia) => { state.MaestriaDistancia = MaestriaDistancia },
    setMaestriaCorpoACorpo: (state, MaestriaCorpoACorpo) => { state.MaestriaCorpoACorpo = MaestriaCorpoACorpo },
    setMaestriaAlvoUnico: (state, MaestriaAlvoUnico) => { state.MaestriaAlvoUnico = MaestriaAlvoUnico },
    setMaestriaZona: (state, MaestriaZona) => { state.MaestriaZona = MaestriaZona },
    setMaestriaCritico: (state, MaestriaCritico) => { state.MaestriaCritico = MaestriaCritico },
    setMaestriaCostas: (state, MaestriaCostas) => { state.MaestriaCostas = MaestriaCostas },
    setMaestriaBerserk: (state, MaestriaBerserk) => { state.MaestriaBerserk = MaestriaBerserk },
    setResistencia: (state, Resistencia) => { state.Resistencia = Resistencia }
  },
  actions: {
    setDanoBase ({ commit }, DanoBase) { commit('setDanoBase', parseInt(DanoBase || 0)) },
    setDanoCritico ({ commit }, DanoCritico) { commit('setDanoCritico', parseInt(DanoCritico || 0)) },
    setDanosCausados ({ commit }, DanosCausados) { commit('setDanosCausados', parseInt(DanosCausados || 0)) },
    setMaestriaElemental ({ commit }, MaestriaElemental) { commit('setMaestriaElemental', parseInt(MaestriaElemental || 0)) },
    setMaestriaDistancia ({ commit }, MaestriaDistancia) { commit('setMaestriaDistancia', parseInt(MaestriaDistancia || 0)) },
    setMaestriaCorpoACorpo ({ commit }, MaestriaCorpoACorpo) { commit('setMaestriaCorpoACorpo', parseInt(MaestriaCorpoACorpo || 0)) },
    setMaestriaAlvoUnico ({ commit }, MaestriaAlvoUnico) { commit('setMaestriaAlvoUnico', parseInt(MaestriaAlvoUnico || 0)) },
    setMaestriaZona ({ commit }, MaestriaZona) { commit('setMaestriaZona', parseInt(MaestriaZona || 0)) },
    setMaestriaCritico ({ commit }, MaestriaCritico) { commit('setMaestriaCritico', parseInt(MaestriaCritico || 0)) },
    setMaestriaCostas ({ commit }, MaestriaCostas) { commit('setMaestriaCostas', parseInt(MaestriaCostas || 0)) },
    setMaestriaBerserk ({ commit }, MaestriaBerserk) { commit('setMaestriaBerserk', parseInt(MaestriaBerserk || 0)) },
    setResistencia ({ commit }, Resistencia) { commit('setResistencia', parseInt(Resistencia || 0)) }
  }
})
