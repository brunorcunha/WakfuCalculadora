<template>
  <table id="grid">
    <tr v-for="x in tamanho" :key="`tr${x}`">
      <td v-for="y in tamanho" :key="`td${y}`">
        <Bloco
          :posicao="frenteCostasLado(x, y)"
          :tipoSpell="tipoSpell"
          :spell="maestria(x, y)"
        />
      </td>
    </tr>
  </table>
</template>

<script>
import Bloco from './Bloco'

  export default {
    name: 'Grid',
    components: { Bloco },
    props: {
      tipoSpell: { type: String, default: '' }
    },
    data: () => ({
      tamanho: 7
    }),
    computed: {
      meio () {
        return Math.ceil(this.tamanho / 2)
      },
      corpoACorpo () {
        return 2
      }
    },
    methods: {
      costas (x, y) {
        const formula = (x - this.meio) - Math.abs(y - this.meio)
        return formula > 0 ? 'costas' : null
      },
      frente (x, y) {
        const formula = (this.meio - x) - Math.abs(this.meio - y)
        return formula > -1 ? 'frente' : null
      },
      frenteCostasLado (x, y) {
        const frente = this.frente(x, y)
        const costas = this.costas(x, y)
        if (frente) return frente
        if (costas) return costas
        return 'lado'
      },
      maestria (x, y) {
        if (x === this.meio && y === this.meio) return 'meio'
        const formula = Math.abs(this.meio - x) + Math.abs(this.meio - y)
        if (formula <= this.corpoACorpo) return 'cac'
        // if (x === 1 || y === 1 || x === this.tamanho || y === this.tamanho) return 'borda'
        return 'dist'
      }
    }
  }
</script>

<style scoped>

</style>
