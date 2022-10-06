<template>
  <v-row align="center">
    <v-col cols="6" md="4" offset-md="3">
      <v-select
        v-model="selected"
        label="Selecione um produto"
        :items="produtos"
        item-text="produto"
        item-value="id"
        chips
        deletable-chips
        @change="change($event)" 
      ></v-select> <!-- @change="change($event)" -->
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: "SelecionaProduto",

  // create a pops up to pass to the sister component the SelectModel
  props: {
    selectedProdutoValue: {
      type: String,
      default: null
    }
  },

  data() {
    return {
      selected: this.value,
    };
  },

  computed: {
    ...mapState(['produtos']),

  },

  mounted() {
    this.getProdutos();
  },

  methods: {
    ...mapActions(['getProdutos']),

    // passar o valor de selecionado de produtos para o componente pai
    change() {
      this.$emit('input', this.selected);
    }
  },
};
</script>