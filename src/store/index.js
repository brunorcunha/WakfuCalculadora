import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    lang: 'pt-BR',
    theme: false,
    DanoBase: 10,
    DanoCritico: 20,
    DanosCausados: 0,
    MaestriaElemental: 0,
    MaestriaDistancia: 0,
    MaestriaCorpoACorpo: 0,
    MaestriaAlvoUnico: 0,
    MaestriaZona: 0,
    MaestriaCritico: 0,
    MaestriaCostas: 0,
    MaestriaBerserk: 0,
    Resistencia: 0
  },
  getters: {
    lang: state => state.lang,
    theme: state => state.theme,
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
    setLang: (state, lang) => { state.lang = lang },
    setTheme: (state, theme) => { state.theme = theme },
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
    setResistencia: (state, Resistencia) => { state.Resistencia = Resistencia },
    initializeStore: (state) => {
      const LSStore = localStorage.getItem('store')
      if(LSStore) store.replaceState(Object.assign(state, JSON.parse(LSStore)))
    }
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

export default store
