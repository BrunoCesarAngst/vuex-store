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

  // obter o valor selecionado de produtos do componente irmão SelecionaProduto

  props: {
    selectedProduto: {
      type: String,
      default: null
    }
  },

  data() {
    return {
    };
  },

  computed: {
    ...mapState(['modelos']),
    // obter o valor selecionado de produtos do componente irmão SelecionaProduto
    selectedTheProduto() {
      return this.$parent.selectedProduto;
    },
  },

  mounted() {
    const id = this.selectedTheProduto;
  
    this.expandProductsModels(id);

  },

  methods: {
    ...mapActions(['expandProductsModels']),

  },
};
</script>