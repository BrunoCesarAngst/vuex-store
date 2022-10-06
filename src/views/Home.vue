<template>
  <div class="home">
    <v-spacer></v-spacer>
    <SelecionaProduto v-model="selectedProduto" />
    <SelecionaModelo v-model="selectedModelo" :selectedProduto="selectedProduto" v-if="renderSelecionaModelo" />
  </div>
</template>

<script>
// @ is an alias to /src
import SelecionaModelo from "../components/SelecionaModelo.vue";
import SelecionaProduto from "../components/SelecionaProduto.vue";

export default {
  name: "Home",

  components: {
    SelecionaProduto,
    SelecionaModelo
  },
  
  // pegar o valor selecionado componente filho SelecionaProduto
  props: ['selectedProduto'],
  
  data() {
    return {
      
    };
  },

  // renderizar o componente SelecionaModelo baseado no valor selecionado de produtos no componente SelecionaProduto
  computed: {
    renderSelecionaModelo() {
      return this.selectedProduto;
    },
  },

  methods: {

  },

};
</script>
