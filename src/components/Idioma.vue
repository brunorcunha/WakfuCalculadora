<template>
  <v-menu offset-y>
    <template #activator="{ on: menu }">
      <v-tooltip bottom>
        <template #activator="{ on: tooltip }">
          <v-btn
              icon
              small
              dark
              class="ma-0"
              v-on="{ ...tooltip, ...menu }"
          >
            <img :src="getImgUrl($i18n.locale)" class="idioma">
          </v-btn>
        </template>
        <span>{{ $t('trocaridioma') }}</span>
      </v-tooltip>
    </template>
    <v-list
      dense
      subheader
    >
      <v-subheader>{{ $t('trocaridioma') }}</v-subheader>
      <v-divider />
      <v-list-item-group>
        <template v-for="lang in langs">
          <v-list-item
            :key="lang.locale"
            @click="mudarIdioma(lang)"
          >
            <v-list-item-content><v-list-item-title>{{ lang.nome }}</v-list-item-title></v-list-item-content>
            <v-list-item-action><img :src="getImgUrl(lang.locale)"></v-list-item-action>
          </v-list-item>
        </template>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data: () => ({
    langs: [
      { locale: 'pt-BR', nome: 'Português' },
      { locale: 'fr', nome: 'Français' },
      { locale: 'en', nome: 'English' }
    ]
  }),
  methods: {
    mudarIdioma (lang) {
      if (this.$i18n.locale === lang.locale) return
      this.$store.commit('setLang', lang.locale)
    },
    getImgUrl (lang) {
      let images = require.context('../assets/', false, /\.png$/)
      return images(`./${lang}.png`)
    }
  }
}
</script>
