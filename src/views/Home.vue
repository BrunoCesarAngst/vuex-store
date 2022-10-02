<template>
  <div class="home">
    <v-spacer></v-spacer>
    <SelecionaProduto />
    <SelecionaModelo />
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
};
</script>
