<template>
  <v-tooltip bottom>
    <template #activator="{ on }">
      <v-btn icon v-on="on" @click="trocarTema">
        <v-icon :color="$vuetify.theme.dark ? 'white' : 'black'">invert_colors</v-icon>
      </v-btn>
    </template>
    <span>{{ $t('trocartema') }}</span>
  </v-tooltip>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TrocarTema',
  computed: {
    ...mapGetters(['theme'])
  },
  mounted () {
    this.$vuetify.theme.dark = this.theme
  },
  methods: {
    trocarTema () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      this.$store.commit('setTheme', this.$vuetify.theme.dark)
    }
  }
}
</script>

<style scoped>

</style>
