<template>
  <v-text-field
      outlined
      dense
      hide-details
      :value="value"
      :label="label"
      @input="$emit('input', $event)"
  >
    <template #prepend-inner>
      <div class="iconDados">
        <img :src="require(`../assets/${icon}.png`)" />
      </div>
    </template>
  </v-text-field>
</template>

<script>
export default {
  name: 'DadosCampo',
  props: {
    value: { type: Number, default: 0 },
    label: { type: String, default: '' },
    icon: { type: String, default: 'tags_03' }
  }
}
</script>

<style scoped>

</style>
