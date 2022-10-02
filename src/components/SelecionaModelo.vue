<template>
  <v-row align="center">
    <v-col cols="6" md="4" offset-md="3">
      <v-select
        v-model="selected"
        :items="modelos"
        label="Selecione o modelo"
        item-text="modelo"
        item-value="id"
        chips
        deletable-chips
        @change="change"
      ></v-select>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: "SelecionaModelo",

  data() {
    return {};
  },

  computed: {
    ...mapState(['modelos']),
  },

  mounted() {
    this.getModelos();
  },

  methods: {
    ...mapActions(['getModelos']),
  },
};
</script>